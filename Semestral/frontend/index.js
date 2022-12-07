const cars = document.querySelector('.pyramids');
const form = document.querySelector('#pyramid-form');
const name = document.querySelector('#pyramidId');

const render = (pyramidsResponse) => {
    let newList = '<ul>';
    for (const pyramid of pyramidsResponse) {
        newList += `<li><a href="detail.html?q=${pyramid.id}">${pyramid.name}</a></li>`;
    }
    newList += '</ul>';
    pyramids.innerHTML = newList;
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:4567/pyramids', { pyramid: pyramid.value});
    render(data.pyramids);
});

(async () => {
    const { data } = await axios.get('http://localhost:4567/pyramids');
    render(data.pyramids);
})();
