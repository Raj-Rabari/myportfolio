import { Twitter , Linkedin , Envelope} from "react-bootstrap-icons";
export default function Contact(){
    return (
        <div className="contactContainer">
            <section className='section contact center' id='contact'>
                    <h2 className='section__title'>Contact</h2>
                    <a href={`mailto:rajrabari8667@gmail.com`} className="btn btn-outline-primary mx-2">Email me <Envelope/></a>
                    <a href="https://twitter.com/RajRaba20243771?t=95SoMHOY6gQ5SzIcuM5UjQ&s=08" className="btn btn-outline-primary mx-2">Twitter  <Twitter/></a>
                    <a href="https://www.linkedin.com/in/raj-rabari-7b9382234/" className="btn btn-outline-primary mx-2">Linkedin <Linkedin/></a>
            </section>
        </div>
    );
}