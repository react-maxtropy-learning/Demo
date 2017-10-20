import React, { Component } from 'react'
import './datePicker.css'

let getMonthDate = function (year, month) {
  let ret = []
  if (!year || !month) {
    let today = new Date()
    year = today.getFullYear()
    month = today.getMonth() + 1
  }
  let firstDay = new Date(year, month - 1, 1)// 当月第一天
  let firstDayWeekDay = firstDay.getDay() // 当月第一天是周几
  if (firstDayWeekDay === 0) {
    firstDayWeekDay = 7
  }
  let lastDayOfLastMonth = new Date(year, month - 1, 0)
  let lastDateOfLastMonth = lastDayOfLastMonth.getDate()// 上个月月最后一天

  let preMonthDayCount = firstDayWeekDay - 1// 上个月展示的天数
  let lastDay = new Date(year, month, 0)
  let lastDate = lastDay.getDate() // 当月的最后一天
  for (let i = 0; i < 42; i++) {
    let date = i - preMonthDayCount + 1
    let showDate = date
    let thisMonth = month
    if (date <= 0) {
      // 上一个月
      thisMonth = month - 1
      showDate = lastDateOfLastMonth + date
    } else if (date > lastDate) {
      // 下一个月
      thisMonth = month + 1
      showDate = showDate - lastDate
    }

    if (thisMonth === 0) thisMonth = 12
    if (thisMonth === 13) thisMonth = 1
    ret.push({
      month: thisMonth,
      date: date,
      showDate: showDate
    })
  }
  return ret
}

class DatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dayData: undefined,
      theader: [],
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      currentDay: new Date().getDate(),
      currentShow: []
    }
    this.btnGroup = [
      {name: '按年', func: () => this.getYear()},
      {name: '按月', func: () => this.getMonthFunc()},
      {name: '按日', func: () => this.getDayFunc()}
    ]
    this.getYear = this.getYear.bind(this)
    this.getMonthFunc = this.getMonthFunc.bind(this)
    this.getDayFunc = this.getDayFunc.bind(this)
    this.clickChangeBc = this.clickChangeBc.bind(this)
    this.nextOrPre = this.nextOrPre.bind(this)
  }
  getYear (year) {
    this.btnGroup.forEach(item => {
      if (item.name === '按年') {
        item.className = 'btn-active'
      } else {
        item.className = ''
      }
    })
    if (!year) {
      year = new Date().getFullYear()
    }
    let data = [
      {value: [{showDate: year - 4, date: 'argt'}, {showDate: year - 3, date: 'evb'}, {showDate: year - 2, date: 'iqwsde'}]},
      {value: [{showDate: year - 1, date: 'bdgf'}, {showDate: year, date: 'f42jk'}, {showDate: year + 1, date: 'jdf52'}]},
      {value: [{showDate: year + 2, date: 'cb'}, {showDate: year + 3, date: 'ger'}, {showDate: year + 4, date: 'knp'}]},
      {value: [{showDate: year + 5, date: 'dop'}, {showDate: year + 6, date: 'haswf'}, {showDate: year + 7, date: 'lfk'}]}]
    data.forEach(item =>
        item.value.forEach(datum => {
          if (datum.showDate === year) {
            datum.bg = 'clickedBg'
            datum.type = 'year'
          } else {
            datum.type = 'year'
          }
        })
      )
    this.setState({
      theader: [],
      dayData: data,
      currentShow: [`${year - 4}-${year + 7}`]
    })
  }
  getMonthFunc (year, month) {
    this.btnGroup.forEach(item => {
      if (item.name === '按月') {
        item.className = 'btn-active'
      } else {
        item.className = ''
      }
    })
    if (!year) {
      year = new Date().getFullYear()
      month = new Date().getMonth() + 1
    }
    let data = [
      {value: [{showDate: '01', date: 'argt'}, {showDate: '02', date: 'evb'}, {showDate: '03', date: 'iqwsde'}]},
      {value: [{showDate: '04', date: 'bdgf'}, {showDate: '05', date: 'f42jk'}, {showDate: '06', date: 'jdf52'}]},
      {value: [{showDate: '07', date: 'cb'}, {showDate: '08', date: 'ger'}, {showDate: '09', date: 'knp'}]},
      {value: [{showDate: '10', date: 'dop'}, {showDate: '11', date: 'haswf'}, {showDate: '12', date: 'lfk'}]}]
    data.forEach(item =>
        item.value.forEach(datum => {
          if (datum.showDate === `${(month || []).length === 1 ? '0' + month : month}`) {
            datum.bg = 'clickedBg'
            datum.type = 'month'
          } else {
            datum.type = 'month'
          }
        })
      )

    this.setState({
      theader: [],
      dayData: data,
      currentShow: [year]
    })
  }
  getDayFunc (year, month) {
    this.btnGroup.forEach(item => {
      if (item.name === '按日') {
        item.className = 'btn-active'
      } else {
        item.className = ''
      }
    })
    if (!year || !month) {
      year = new Date().getFullYear()
      month = new Date().getMonth() + 1
    }
    let day = new Date().getDate()
    let monthDate = getMonthDate(year, month)
    let oneWeek = monthDate.slice(0, 7)
    let twoWeek = monthDate.slice(7, 14)
    let threeWeek = monthDate.slice(14, 21)
    let fourWeek = monthDate.slice(21, 28)
    let fiveWeek = monthDate.slice(28, 35)
    let sixWeek = monthDate.slice(35, 42)
    let monthDateAfter = [
      { value: oneWeek },
      { value: twoWeek },
      { value: threeWeek },
      { value: fourWeek },
      { value: fiveWeek },
      { value: sixWeek }
    ]
    monthDateAfter.forEach(item =>
      item.value.forEach(data => {
        if (data.showDate === day) {
          data.bg = 'clickedBg'
          data.type = 'day'
        } else { data.type = 'day' }
      })
    )
    this.setState({
      dayData: monthDateAfter,
      theader: ['一', '二', '三', '四', '五', '六', '日'],
      currentShow: [year, month]
    })
  }
  nextOrPre (operate) {
    let year = typeof (this.state.currentShow[0]) === 'number' ? this.state.currentShow[0] : (Number(this.state.currentShow[0].slice(0, 4)) + 4)
    let month = this.state.currentShow[1]
    let type = (this.state.dayData[0].value)[0].type
    if (type === 'year') {
      if (operate === 'pre') {
        this.getYear(year - 1)
      } else {
        this.getYear(year + 1)
      }
    } else if (type === 'month') {
      if (operate === 'pre') {
        this.getMonthFunc(year - 1, month)
      } else {
        this.getMonthFunc(year + 1, month)
      }
    } else if (type === 'day') {
      if (operate === 'pre') {
        this.getDayFunc(year, month - 1)
      } else {
        this.getDayFunc(year, month + 1)
      }
    }
  }
  clickChangeBc (id) {
    this.state.dayData.forEach(item =>
      item.value.forEach(data => {
        if (data.date === id) {
          data.bg = 'clickedBg'
        }
      }
      )
    )
    this.setState({
      dayData: this.state.dayData
    })
  }
  render () {
    let arr = (this.state.dayData && this.state.dayData) || []
    let currentshowDate = this.state.currentShow.join('-')
    return (

      <div>
        <div className='btnGroup'>
          {this.btnGroup.map(item => <button key={item.name} className={item.className} onClick={item.func}>{item.name}</button>)}
        </div>
        { (arr && arr.length) ? <div className='wrapper'>
          <div className='header'>
            <a className='pre' onClick={() => this.nextOrPre('pre')}>&lt;</a>
            <span className='currentMonth'>{currentshowDate}</span>
            <a className='next' onClick={() => this.nextOrPre('next')}>&gt;</a>
          </div>
          <table className='table'>
            <thead>
              <tr>
                {this.state.theader.map(item => <th key={item}>{item}</th>)}
              </tr>
            </thead>
            <tbody>
              {
              arr.map((item, index) => (
                <tr key={index}>
                  {item.value.map(data => <td onClick={() => this.clickChangeBc(data.date)} className={`${data.type === 'year' || data.type === 'month' ? 'monthYearTd' : 'dayTd'} ${data.bg ? 'clickedBg' : ''}`} key={data.date}>{data.showDate}</td>)}
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        : <div className='emptyDate'>日历</div>
        }
      </div>
    )
  }
}

export default DatePicker
