//BUTTONS
const daily_btn = document.getElementById('daily_btn');
const weekly_btn = document.getElementById('weekly_btn');
const monthly_btn = document.getElementById('monthly_btn');

//DISPLAY STATES
let display_daily = document.querySelectorAll('.daily');
let display_weekly = document.querySelectorAll('.weekly');
let display_monthly = document.querySelectorAll('.monthly');

//const show_yest = document.querySelector('.yesterday');
//const show_last_wk = document.querySelector('.last_week');
//const show_last_mth = document.querySelector('.last_month');

//CLICK EVENTS
daily_btn.addEventListener('click', ()=>{
      ShowAllDaily();
      HideAllWeekly();
      HideAllMonthly();
    
})

weekly_btn.addEventListener('click', ()=>{
    HideAllDaily();
    ShowAllWeekly();
    HideAllMonthly();    
})

monthly_btn.addEventListener('click', ()=>{
    HideAllDaily();
    HideAllWeekly();
    ShowAllMonthly();
})

//FUNCTIONS
function ShowAllDaily(){
    for(let i = 0; i < display_daily.length; i++){
        console.log(display_daily[i]);
        if(display_daily[i].style.display != 'block'){
            display_daily[i].style.display = 'block';
        }
    }
}

function ShowAllWeekly(){
    for(let i = 0; i < display_weekly.length; i++){
        console.log(display_weekly[i]);
        if(display_weekly[i].style.display != 'block'){
            display_weekly[i].style.display = 'block';
        }
    }
}

function ShowAllMonthly(){
    for(let i = 0; i < display_monthly.length; i++){
        console.log(display_monthly[i]);
        if(display_monthly[i].style.display != 'block'){
            display_monthly[i].style.display = 'block';
        }
    }
}

function HideAllDaily(){
    for(let i = 0; i < display_daily.length; i++){
        console.log(display_daily[i]);
        if(display_daily[i].style.display != 'none'){
            display_daily[i].style.display = 'none';
        }
    }
}

function HideAllWeekly(){
    for(let i = 0; i < display_weekly.length; i++){
        console.log(display_weekly[i]);
        if(display_weekly[i].style.display != 'none'){
            display_weekly[i].style.display = 'none';
        }
    }
}

function HideAllMonthly(){
    for(let i = 0; i < display_monthly.length; i++){
        console.log(display_monthly[i]);
        if(display_monthly[i].style.display != 'none'){
            display_monthly[i].style.display = 'none';
        }
    }
}