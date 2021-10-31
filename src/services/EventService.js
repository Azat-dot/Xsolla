
class EventService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllInfo =  () => {
        return  this.getResource('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json');
    }       
    
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
        .then(res => res.json())
        .then(items => this.setState({ items: items }))
        .catch(err => console.error(err));
      }
}


export default EventService;