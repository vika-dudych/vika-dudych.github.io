const textarea = document.querySelector('.edit-area');
const btnEdit = document.querySelector('.btn-edit');
const btnSave = document.querySelector('.btn-save');
const btnAdd = document.querySelector('.btn-add');
const btnStyle = document.querySelector('.btn-style');
const firstBlock = document.querySelector('.first-block');
const editBlock = document.querySelector('.edit-block');
const styleBlock = document.querySelector('.style-block');
const topBlock = document.querySelector('.top-block');
const fontSize = document.querySelector('.form-size');
const colorsBlock = document.querySelector('.colors');
const btnColors = document.querySelector('.btn-text-color');
const btnBg = document.querySelector('.btn-bg-color');
const bgBlock = document.querySelector('.bg');
const checkbox = document.getElementsByName('check');
let dropdown = document.querySelector(".dropdown");
let select = document.querySelector(".options")
const texBox = document.querySelector(".text-box")
const addBlock = document.querySelector(".block-add")
let dropdownTable = document.querySelector(".dropdown-table");
let selectTable = document.querySelector(".options-table")
const texBoxTable = document.querySelector(".text-box-table")
let dropdownTableColor = document.querySelector(".dropdown-table-color");
let selectTableColor = document.querySelector(".options-table-color")
const texBoxTableColor = document.querySelector(".text-box-table-color")
const btnTable = document.querySelector("#table")
const btnList = document.querySelector("#list")
const tableBlock = document.querySelector(".block-table")
const listBlock = document.querySelector(".block-list")
const btnCreateTable = document.querySelector(".btn-create-table")
let TR = document.querySelector("#tr");
let TD = document.querySelector("#td")
let wTD = document.querySelector("#w-td");
let hTD = document.querySelector("#h-td")
let wBorder = document.querySelector("#w-border");
let typeBorder = document.querySelector("#type-border");
let colorBorder = document.querySelector("#color-border");
let dropdownList = document.querySelector(".dropdown-list");
let selectList = document.querySelector(".options-list");
const texBoxList = document.querySelector(".text-box-list");
const typeLi = document.querySelector("#box-list");
const Li = document.querySelector("#li");
const btnCreateList = document.querySelector(".btn-create-list");
const reset_table = document.querySelector("#reset-table");
const reset_list = document.querySelector("#reset-list");

// Buttons click on first block

btnEdit.onclick = function () {
    editBlock.classList.add('show');
    styleBlock.classList.remove('show');
    textarea.value = topBlock.innerHTML;
}
btnSave.onclick = function () {
    styleBlock.classList.remove('show');
    editBlock.classList.remove('show');
    topBlock.innerHTML = textarea.value;
    topBlock.style.height = 'auto';
}
btnStyle.onclick = function () {
    styleBlock.classList.add('show');
    editBlock.classList.remove('show');
}

// Change font-size on top block

fontSize.onclick = function () {
    topBlock.style.fontSize = event.target.value;
}

// Change colors on top block

btnColors.onclick = function () {
    colorsBlock.classList.remove('hide');
    bgBlock.classList.add('hide');

}
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
for (let i = 0; i < colorsBlock.children.length; i++) {
    colorsBlock.children[i].style.backgroundColor = colors[i];
    colorsBlock.children[i].onclick = function () {
        topBlock.style.color = this.style.backgroundColor;
    }

}

// Change  background on top block

btnBg.onclick = function () {
    bgBlock.classList.remove('hide');
    colorsBlock.classList.add('hide');
}
let bg = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
for (let i = 0; i < bgBlock.children.length; i++) {
    bgBlock.children[i].style.backgroundColor = bg[i];
    bgBlock.children[i].onclick = function () {
        topBlock.style.backgroundColor = this.style.backgroundColor;
    }
}


// Change font-style on top block

let selectCheckbox = function (el, callback) {
    el.forEach(function (checkbox) {
        callback(checkbox);
    });
};

selectCheckbox(checkbox, function (item) {
    item.onclick = function (e) {
        if (item.checked === true) {
            topBlock.style.fontStyle = e.target.value;
            topBlock.style.fontWeight = e.target.value;
        } else {
            topBlock.style.fontStyle = 'normal';
            topBlock.style.fontWeight = 'normal';
        }
    };
});


/*select font-family*/

select.onclick = function (event) {
    texBox.value = event.target.textContent;
    topBlock.style.fontFamily = event.target.textContent;
}
dropdown.onclick = function () {
    dropdown.classList.toggle("active")
}


// button add new table block

btnAdd.onclick = function () {
    firstBlock.classList.remove('show');
    firstBlock.classList.add('hide')
    addBlock.classList.add('show');
    reset_table.reset();
    reset_list.reset();

}


/*select border type in table*/

selectTable.onclick = function (event) {
    texBoxTable.value = event.target.textContent;

}
dropdownTable.onclick = function () {
    dropdownTable.classList.toggle("active")
}


/*select border color in table*/

selectTableColor.onclick = function (event) {
    texBoxTableColor.value = event.target.textContent;

}
dropdownTableColor.onclick = function () {
    dropdownTableColor.classList.toggle("active")
}


// Create table

btnTable.onclick = function () {
    tableBlock.classList.add('show');
    listBlock.classList.remove('show');
    addBlock.style.height = 'auto';
}
btnCreateTable.onclick = function () {
    addBlock.classList.remove('show');
    listBlock.classList.add('hide');
    firstBlock.classList.add('show');
    let num_tr = TR.value;
    let num_td = TD.value;
    let w_TD = wTD.value;
    let h_TD = hTD.value;
    let w_Border = wBorder.value;
    let type_Border = typeBorder.value;
    let color_Border = colorBorder.value;
    let theader = '<table>\n';
    let tbody = '';

    for (let i = 0; i < num_tr; i++) {
        tbody += '<tr>';
        for (let j = 0; j < num_td; j++) {
            tbody += ` <td style = "width: ${w_TD}px; height: ${h_TD}px; border: ${w_Border}px ${type_Border} ${color_Border};" > TD  `;
            tbody += `</td>`;
        }
        tbody += '</tr>\n';
    }
    let tfooter = '</table>';
    textarea.value += theader + tbody + tfooter;

}

// show block create list

btnList.onclick = function () {
    tableBlock.classList.remove('show');
    listBlock.classList.add('show');
    addBlock.style.height = 'auto';
}

/*select  type in list */

selectList.onclick = function (event) {
    texBoxList.value = event.target.textContent;
}
dropdownList.onclick = function () {
    dropdownList.classList.toggle("active")
}

// create list

btnCreateList.onclick = function () {
    addBlock.classList.remove('show');
    listBlock.classList.add('hide');
    firstBlock.classList.add('show');
    let li = Li.value;
    let type_li = typeLi.value;

    let lheader = `<ul style = "list-style-type: ${type_li}; margin-left: 16px;" >`;
    let lbody = '';

    for (let l = 0; l < li; l++) {
        lbody += `<li>item ${l + 1}</li>`;
    }
    lbody += '</ul>';

    let lfooter = '</ul>';
    textarea.value += lheader + lbody + lfooter;

}

