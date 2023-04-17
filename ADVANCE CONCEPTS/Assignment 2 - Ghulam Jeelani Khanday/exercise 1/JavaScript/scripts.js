//----
document.querySelector('#btnTitle').onclick = function() {
    if (document.querySelector('#txt_title').value.length == 0) {
        alert('Please Enter Grocery Title Here');
    } else {
        const tl = document.querySelector('#grocery #txt_title').value;
        document.querySelector('#card_title').innerHTML = tl;
        document.querySelector('#card_title').innerHTML += `
            <hr/>
        `;
    }
}

document.querySelector('#btnItem').onclick = function() {
    if (document.getElementById('txt_item').value.length == 0) {
        alert('Please Add Some Items First Then Continue!!');
    } else {
        const t_item = document.querySelector('#txt_item').value;
        document.querySelector('#groc_list').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#txt_item').value}
            </span>
            <button class="delete">
                <i class="fa fa-trash"></i>
            </button>
        </div>
    `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

    }
}