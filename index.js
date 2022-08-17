//BUTTONS
const daily_btn = document.getElementById('daily_btn');
const weekly_btn = document.getElementById('weekly_btn');
const monthly_btn = document.getElementById('monthly_btn');

//DISPLAY STATES
const display_daily = document.querySelectorAll('.daily');
const display_weekly = document.querySelectorAll('.weekly');
const display_monthly = document.querySelectorAll('.monthly');

//CLICK EVENTS
daily_btn.addEventListener('click', ()=>{
      ShowAllDaily();
      HideAllWeekly();
      HideAllMonthly();

      //HighlightDaily();
    
})

weekly_btn.addEventListener('click', ()=>{
    HideAllDaily();
    ShowAllWeekly();
    HideAllMonthly();    
    
    //HighlightWeekly();
})

monthly_btn.addEventListener('click', ()=>{
    HideAllDaily();
    HideAllWeekly();
    ShowAllMonthly();
    
    //HighlightMonthly();
})

//FUNCTIONS
function ShowAllDaily(){
    daily_btn.style.color = 'white';
    for(let i = 0; i < display_daily.length; i++){
        console.log(display_daily[i]);
        if(display_daily[i].style.display != 'block'){
            display_daily[i].style.display = 'block';
        }
    }
}

function ShowAllWeekly(){
    weekly_btn.style.color = 'white';
    for(let i = 0; i < display_weekly.length; i++){
        console.log(display_weekly[i]);
        if(display_weekly[i].style.display != 'block'){
            display_weekly[i].style.display = 'block';
        }
    }
}

function ShowAllMonthly(){
    monthly_btn.style.color = 'white';
    for(let i = 0; i < display_monthly.length; i++){
        console.log(display_monthly[i]);
        if(display_monthly[i].style.display != 'block'){
            display_monthly[i].style.display = 'block';
        }
    }
}

function HideAllDaily(){
    daily_btn.style.color = 'hsl(236, 100%, 87%)';
    for(let i = 0; i < display_daily.length; i++){
        console.log(display_daily[i]);
        if(display_daily[i].style.display != 'none'){
            display_daily[i].style.display = 'none';
        }
    }
}

function HideAllWeekly(){
    weekly_btn.style.color = 'hsl(236, 100%, 87%)';
    for(let i = 0; i < display_weekly.length; i++){
        console.log(display_weekly[i]);
        if(display_weekly[i].style.display != 'none'){
            display_weekly[i].style.display = 'none';
        }
    }
}

function HideAllMonthly(){
    monthly_btn.style.color = 'hsl(236, 100%, 87%)';
    for(let i = 0; i < display_monthly.length; i++){
        console.log(display_monthly[i]);
        if(display_monthly[i].style.display != 'none'){
            display_monthly[i].style.display = 'none';
        }
    }
}
/*
function HighlightDaily(){
      daily_btn.style.color = 'white';
      weekly_btn.style.color = 'LightRedPlus';
      monthly_btn.style.color = 'LightRedPlus';
}
function HighlightWeekly(){
      daily_btn.style.color = 'LightRedPlus';
      weekly_btn.style.color = 'white';
      monthly_btn.style.color = 'LightRedPlus';
}
function HighlightMonthly(){
      daily_btn.style.color = 'LightRedPlus';
      weekly_btn.style.color = 'LightRedPlus';
      monthly_btn.style.color = 'white';
}
*/