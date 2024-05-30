
import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className={`justify-content mx-auto z-30 w-5/6 gap-16 md:flex`}>

            <div className="basis-1/2 mt-16 md:mt-0">
                <img src={Logo} alt="" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga possimus perferendis ipsum cum. Doloribus modi tempore iste voluptatem mollitia culpa libero, sequi laudantium recusandae voluptates quia, quaerat, quam optio.</p>
                <p>© Evogym All Rights Reserved.</p>
            </div>

            <div className="mt-16 basis:1/4 md:mt-0 items-start">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">PQRS</p>
                <p className="my-5">PQRS</p>
                <p>PQRS</p>
                
            </div>

            <div className="mt-16 basis:1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="">334(122222222)</p>
            </div>
        </div>
        
    </footer>
  )
}
export default Footer