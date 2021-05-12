import Link from 'next/link'
//Components
import AppLayout from "../../components/AppLayout"

export default function Timeline ({ userName}) {
    return (
        <>
            <AppLayout>
                <h1>This is the timeline of {userName}</h1>
                <Link href="/">Go home</Link>
            </AppLayout>
        </>
        )
}

Timeline.getInitialProps = () => {
        //  return ( { userName: "Migue" })   // Declaramos props asi
       // return Promise.resolve( { userName: "Migue" })  //  Podemos agregar esta linea eliminando el "async" para que la promesa se resuelva ella misma
        return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(response => { 
            console.log(response)
            const {userName} = response
            return {userName}
            
        })

        //hacemos fetch para nuestra "api"  en hello.js
}