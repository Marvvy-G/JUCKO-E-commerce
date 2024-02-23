import { Text, clx } from "@medusajs/ui"
import Link from "next/link"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import MedusaCTA from "../../components/medusa-cta"
import SocialsCTA from "@modules/layout/components/socials-cta"
import PaymentsCTA from "@modules/layout/components/payments-cta"

const fetchCollections = async () => {
  const { collections } = await getCollectionsList()
  return collections
}

const fetchCategories = async () => {
  const { product_categories } = await getCategoriesList()
  return product_categories
}

export default async function Footer() {
  const productCollections = await fetchCollections().then(
    (collections) => collections
  )
  const productCategories = await fetchCategories().then(
    (categories) => categories
  )
  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              JUCKO
            </Link>
            <div className="flex flex-col gap-y-2">
                            <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="/termsandconditions"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/shippinganddelivery"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Shipping and Delivery Info
                  </a>
                </li>
                <li>
                  <a
                    href="/returnsandrefunds"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Return and Refund Policy
                  </a>
                 </li>
              </ul>
            </div>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                
                <ul className="grid grid-cols-1 gap-2">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <Link
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </Link>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {productCollections && productCollections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (productCollections?.length || 0) > 3,
                    }
                  )}
                >
                  {productCollections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Company Info</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="/about"
                    target="_self"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    About Jucko
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    target="_self"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Find us on</span>
              <SocialsCTA />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">We accept</span>
              <PaymentsCTA />
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Jucko Store. All rights reserved.
          </Text>
          <Text>Website by 
                 <a
                    href="https://www.mervert.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  > Mervert
                  </a></Text>
        </div>
      </div>
    </footer>
  )
}
