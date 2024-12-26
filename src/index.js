import Tooltip from './ninja-ui/tooltip';
import './ninja-ui/styles/tooltip.css';
import Dropdown from './ninja-ui/dropdown'; 
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

// Create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Create a dropdown
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// Create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('you clicked me :)');
});