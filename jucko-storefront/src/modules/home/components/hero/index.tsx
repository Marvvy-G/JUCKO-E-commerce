import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-5">
      <div className="col-span-1 row-span-1">
      <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4792081/pexels-photo-4792081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="col-span-2 row-span-2">
      <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494430539277-0c8da386e1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyb2NoZXQlMjBzbGlwcGVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className="col-span-1 row-span-1">
      <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532629804872-98086b058cae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JvY2hldCUyMHNsaXBwZXJzfGVufDB8fDB8fHww" alt="" />
      </div>
    </div>
  )
}

export default Hero
