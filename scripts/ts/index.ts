const app = document.getElementById("app") as HTMLElement;
app.innerHTML = `
<div class="note_sidebar" id="sideMenu">
    <buttonm id="mybtn"> Click Me to Add a Note</button>
    <div class="folder" id="root">
    </div>
</div>
<div>
    <input class="note_editor" placeholder="Enter Title ... " data>
    <textarea class="note_body" placeholder="Start Writing Here...">
    </textarea>
</div>
`;