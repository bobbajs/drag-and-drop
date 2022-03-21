(() => {
    const lists = document.querySelectorAll('.list');
    const listItem = document.querySelectorAll('.list-item');

    let draggedItem = null;

    for (let i = 0; i < listItem.length; i++) {
        const item = listItem[i];

        item.addEventListener('dragstart', function() {
            draggedItem = item;

            setTimeout(() => {
                item.style.display = "none";
            });
        });

        item.addEventListener('dragend', function() {
            setTimeout(() => {
                item.style.display = "flex";
                draggedItem = null;
            })
        });
    }

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        list.addEventListener('dragenter', function(e) {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0,0,0,0.2)';
        });

        list.addEventListener('dragleave', function(e) {
            list.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });


        list.addEventListener('drop', function() {
            list.appendChild(draggedItem);
            list.style.backgroundColor = 'rgba(0,0,0,0.1)';
        });
    }

})();