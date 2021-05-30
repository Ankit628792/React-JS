
const getData = async (request) => {

    try {
        const res = await fetch(request, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        const data = await res.json();
        return { data, res };

    } catch (error) {
        console.log(error)
    }
}

export default getData;