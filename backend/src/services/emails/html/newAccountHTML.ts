require('dotenv').config();

export const newAccountHTML = (link:string, email:string, temporaryPassword: string):string => {
    return `
    <!DOCTYPE html>
    <html>
        <body>
            <header>
                <h1> The Guest </h1>
            </header>
            <section>
                <h2> Hello ${email}, you were invited to come together in The Guest application ! </h2>
                <h3> Credentials: </h3>
                <h4> Email: ${email} </h4>
                <h4> Temporary password: ${temporaryPassword} </h4> 
                <h4> Note: At the first access you must change your password </h4>
                <a href=${process.env.AUTH_URL}> Go to The Guest <a>
            </section>
        </body>
    </html>
    `
}
