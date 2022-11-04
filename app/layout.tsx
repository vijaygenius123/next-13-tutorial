import './globals.css';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <head>
            <title>Notes App</title>
        </head>
        <body>
        <div className={"container mx-auto p-4"}>
            {children}
        </div>
        </body>
        </html>
    )
}
