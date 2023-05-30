import { Helmet } from 'react-helmet'
import banner from '../../../assets/blogBnnr.jpg'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Blogs() {
  return (
    <>
    <Helmet>
        <title>KIDOO \ blogs</title>
      </Helmet>
    <div className="h-96 mb-36" style={{ backgroundImage: `url(${banner})`,backgroundPosition:"canter",backgroundSize:"cover" }}>
      </div>
   <div className='my-10 '>
   <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton >
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    An access token is a credential that is issued by an authentication server upon successful authentication of a user or client application. It is a string of characters that represents the authorization granted to access specific resources or perform certain actions. Access tokens are typically short-lived and have an expiration time.A refresh token is a long-lived credential that is also issued by the authentication server during the authentication process. Unlike access tokens, refresh tokens are not meant to be included with every request to access protected resources. Instead, they are used to obtain new access tokens when the current one expires or becomes invalid.
                    You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Compare SQL and NoSQL databases?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    SQL and NoSQL differ in whether they are relational SQL or non-relational NoSQL, whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is express js? What is Nest JS ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is MongoDB aggregate and how does it work ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
   </div>
    

        
    
    </>
  )
}

export default Blogs