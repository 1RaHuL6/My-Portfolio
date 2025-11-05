import Nav from '../components/Nav' 

export function Stalker () {

    return (
        <>

        {/* <Nav />
        <p>This is stalker page</p> */}

        <Nav />
            <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
                <img 
                    src="https://media.giphy.com/media/l0HlSW1p27hylPNWM/giphy.gif" 
                    alt="Nothing to see here" 
                    style={{ maxWidth: '300px', borderRadius: '10px' }}
                />
                <h2>Stalker mode: ACTIVATED</h2>
                <p>But there's nothing to stalk yet! Come back later when I've added more secrets.</p>
            </div>

        </>

    )
}

export default Stalker