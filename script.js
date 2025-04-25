const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-target]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
                       const target = document.querySelector(tab.dataset.tabTarget)
    tab.Contents.forEach(tabContent => {
    tabContent.classList.remove('active')
    })
    tab.forEach(tab => {
    tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
})
             })
                       
                       
