function renderMenu() {
    const grid = document.getElementById('grid-box');
    grid.innerHTML = menuData.map(item => `
        <div class="card" onclick="showDetail(${item.id})">
            <img src="${item.images[0]}" loading="lazy">
            <div class="card-body">
                <h4>${item.name}</h4>
                <p class="price">${item.price.toLocaleString()} Ks</p>
            </div>
        </div>
    `).join('');
}

function showDetail(id) {
    const item = menuData.find(m => m.id === id);
    const slider = document.getElementById('slider-content');
    const details = document.getElementById('details-content');
    const badge = document.getElementById('badge');

    slider.innerHTML = item.images.map(img => `<img src="${img}">`).join('');
    
    details.innerHTML = `
        <div class="price-tag">${item.price.toLocaleString()} Ks</div>
        <h2>${item.name}</h2>
        <p class="desc">${item.description}</p>
        <button class="add-to-cart">ခြင်းတောင်းထဲထည့်မည်</button>
    `;
    
    badge.innerText = `1 / ${item.images.length}`;
    document.getElementById('detailPopup').style.display = 'flex';

    slider.onscroll = (e) => {
        const index = Math.round(e.target.scrollLeft / e.target.clientWidth) + 1;
        badge.innerText = `${index} / ${item.images.length}`;
    };
}

function hideDetail() {
    document.getElementById('detailPopup').style.display = 'none';
}

renderMenu();
