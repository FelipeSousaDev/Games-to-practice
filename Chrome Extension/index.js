const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('show-leads');
const saveButton = document.getElementById('input-btn');
const deleteButton = document.getElementById("delete-button");
const leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"));
const tabBtn = document.getElementById('tab-btn');
let myLeads = [];

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
};


function render (leads) {
  let listItem = "";
  leads.forEach((lead) => {
    listItem += `
    <li>
      <a target='_blank' href='http://${lead}'>${lead}</a>
    </li>
    `
});

ulEl.innerHTML = listItem;
inputEl.value = "";

};


saveButton.addEventListener('click', () => {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads)

  });

  tabBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
      
    });
  });
  
deleteButton.addEventListener('dblclick', () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})
