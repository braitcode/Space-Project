import VehiclePort from '../space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import VehicleLand from '../space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import SpaceportPort from '../space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg'
import SpaceportLand from '../space-tourism-website-main/starter-code/assets/technology/image-spaceport-landscape.jpg'
import CapsulePort from '../space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg'
import CapsuleLand from '../space-tourism-website-main/starter-code/assets/technology/image-space-capsule-landscape.jpg'



export const technologyDB = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": VehiclePort,
        "landscape": VehicleLand,
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": SpaceportPort,
        "landscape": SpaceportLand,
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": CapsulePort,
        "landscape": CapsuleLand
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
