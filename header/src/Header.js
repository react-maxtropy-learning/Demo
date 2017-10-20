import React, { Component } from 'react'
import './Header.css'

class App extends Component {
    
  render () {
      return (
          <header className='c-header'>
              <div className='c-header-logo'> </div>
              <nav className='c-header-nav'>
                  <span>header</span>
                  <span>header</span>
              </nav>
              <div className='c-header-user'>
                  {/* <div className='c-header-user-unlogin'>
                      <a>登录</a>
                      <a>注册</a>
                  </div> */}
                  <div className='c-header-user-login'>
                      <img src='./6572637672d8cded11be7f0d0e5aaa42'/>
                      <div className='login'>
                        <p>BigBigWen</p>
                        <a>退出 | 登录</a>
                      </div>
                  </div>
              </div>
          </header>
        )
    }
}


export default App

       {/* <Tab eventKey={dataPointName} title={dataPointName}>
          <BootstrapTable
            data={dataPoints}
            scrollTop={'Bottom'}
            cellEdit={isShow ? {} : {mode: 'dbclick', blurToSave: true, afterSaveCell: this.saveDataPoint}}
            selectRow={isShow ? {} : {mode: 'checkbox', clickToSelect: true, onSelect: onSelect, onSelectAll: onSelectAll}}
            striped
            hover={!isShow}
            options={{noDataText: '无数据'}}
          >
            <TableHeaderColumn width='50' row='0' rowSpan='2' dataField='id' className='overflow' isKey>序号</TableHeaderColumn>
            <TableHeaderColumn width='280' row='0' rowSpan='2' dataField='name' columnTitle editColumnClassName='formula' className='overflow' customEditor={{getElement: TableNameSelect, customEditorParameters: {options: this.pointName}}} >名称</TableHeaderColumn>
            <TableHeaderColumn width='160' row='0' rowSpan='2' dataField='description' columnTitle className='overflow'>描述</TableHeaderColumn>
            <TableHeaderColumn width='120' row='0' rowSpan='2' dataField='objectType' editColumnClassName='formula' customEditor={{getElement: TableSelect, customEditorParameters: {options: TableObjectTypeOptions}}}
              hidden={dataPointName === DltPoint} columnTitle className='overflow'>数据类型</TableHeaderColumn>
            <TableHeaderColumn width='100' row='0' rowSpan='2' dataField='addressOffset' editColumnClassName='formula' customEditor={{getElement: TableSelect, customEditorParameters: {options: [{label: 0, value: 0}, {label: 1, value: 1}]}}}
              hidden={dataPointName === DltPoint} columnTitle className='overflow'>首地址偏移</TableHeaderColumn>
            <TableHeaderColumn width='100' row='0' rowSpan='2' dataField='starting' hidden={dataPointName === DltPoint} columnTitle className='overflow'>开始地址</TableHeaderColumn>
            <TableHeaderColumn width='100' row='0' rowSpan='2' dataField='dataId' hidden={dataPointName === ModBusPoint} columnTitle className='overflow'>数据标识</TableHeaderColumn>
            <TableHeaderColumn width='60' row='0' rowSpan='2' dataField='length' editColumnClassName='formula' customEditor={{getElement: TableSelect, customEditorParameters: {options: TableLengthOptions}}}
              columnTitle className='overflow'>长度</TableHeaderColumn>
            <TableHeaderColumn width='120' row='0' rowSpan='2' dataField='mode' editColumnClassName='formula' customEditor={{getElement: TableSelect, customEditorParameters: {options: TableModeOptions}}}
              columnTitle className='overflow'>位操作模式</TableHeaderColumn>
            <TableHeaderColumn width='170' row='0' rowSpan='2' dataField='converterType' hidden={dataPointName === ModBusPoint} editColumnClassName='formula' customEditor={{getElement: TableSelect, customEditorParameters: {options: DltTableConverterTypeOptions}}}
              columnTitle className='overflow'>解码类型</TableHeaderColumn>
            <TableHeaderColumn width='170' row='0' rowSpan='2' dataField='converterType' hidden={dataPointName === DltPoint} customEditor={{getElement: overflowOptions}}
              editColumnClassName='formula' columnTitle className='overflow'>解码类型</TableHeaderColumn>
            <TableHeaderColumn width='100' row='0' colSpan='2' className='overflow'>y=kx+b</TableHeaderColumn>
            <TableHeaderColumn width='50' row='1' dataField='kFactor' columnTitle>k</TableHeaderColumn>
            <TableHeaderColumn width='50' row='1' dataField='bFactor' columnTitle>b</TableHeaderColumn>
            <TableHeaderColumn width='150' row='0' rowSpan='2' dataField='handleMode' editColumnClassName='formula' customEditor={{getElement: createCustomOptions}} columnTitle className='overflow'>处理方式</TableHeaderColumn>
            <TableHeaderColumn width='50' row='0' rowSpan='2' dataField='upperLimit' columnTitle className='overflow'>数据点上限</TableHeaderColumn>
            <TableHeaderColumn width='50' row='0' rowSpan='2' dataField='lowerLimit' columnTitle className='overflow'>数据点下限</TableHeaderColumn>
          </BootstrapTable>
        </Tab>
        <Tab eventKey={virtualPointType} title={'虚拟点'} >
          <BootstrapTable
            data={allPoints}
            scrollTop={'Bottom'}
            cellEdit={isShow ? {} : {mode: 'dbclick', blurToSave: true, afterSaveCell: this.saveVirtualPoint}}
            selectRow={isShow ? {} : {mode: 'checkbox', clickToSelect: true, onSelect: onSelect, onSelectAll: onSelectAll}}
            striped
            hover={!isShow}
            options={{noDataText: '无数据'}}
          >
            <TableHeaderColumn width='50' dataField='id' isKey className='overflow'>序号</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='name' columnTitle className='overflow'>名称</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='description' columnTitle className='overflow'>描述</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='formula' customEditor={{getElement: createFormulaInput, customEditorParameters: {data: formulaData}}} columnTitle className='overflow' editColumnClassName='formula'>公式</TableHeaderColumn>
            <TableHeaderColumn width='50' dataField='upperLimit' columnTitle className='overflow'>数据过滤上限</TableHeaderColumn>
            <TableHeaderColumn width='50' dataField='lowerLimit' columnTitle className='overflow'>数据过滤下限</TableHeaderColumn>
          </BootstrapTable>
        </Tab>
        <Tab eventKey={eventPointType} title={'报警规则'} >
          <BootstrapTable
            data={eventPoints}
            scrollTop={'Bottom'}
            cellEdit={isShow ? {} : {mode: 'dbclick', blurToSave: true, afterSaveCell: this.saveEventPoint}}
            selectRow={isShow ? {} : {mode: 'checkbox', clickToSelect: true, onSelect: onSelect, onSelectAll: onSelectAll}}
            striped
            hover={!isShow}
            options={{noDataText: '无数据'}}
          >
            <TableHeaderColumn width='50' dataField='id' isKey className='overflow' >序号</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='name' columnTitle >名称</TableHeaderColumn>
            <TableHeaderColumn width='90' dataField='duration' columnTitle className='overflow'>持续时间(ms)</TableHeaderColumn>
            <TableHeaderColumn width='50' dataField='delay' columnTitle className='overflow'>报警延时</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='uploadBefore' columnTitle className='overflow'>报警触发前数据上传时间(min)</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='uploadAfter' columnTitle className='overflow'>报警触发后数据上传时间(min)</TableHeaderColumn>
            <TableHeaderColumn width='50' dataField='level' columnTitle className='overflow'>报警级别</TableHeaderColumn>
            <TableHeaderColumn width='120' dataField='eventType' editColumnClassName='formula' customEditor={{getElement: TableSelect, customEditorParameters: {options: TableEventTypeOptions}}}
              columnTitle className='overflow'>报警类型</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='eventUnit' columnTitle className='overflow'>报警值单位</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='formula' customEditor={{getElement: createFormulaInput, customEditorParameters: {data: formulaData}}} columnTitle className='overflow' editColumnClassName='formula'>报警公式</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='keyPoint' customEditor={{getElement: createFormulaInput, customEditorParameters: {data: formulaData}}} columnTitle className='overflow' editColumnClassName='formula'>核心点数据</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='relatedPoints' customEditor={{getElement: createFormulaInput, customEditorParameters: {data: formulaData}}} columnTitle className='overflow' editColumnClassName='formula'>关联点序列</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='description' columnTitle className='overflow'>报警描述</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='eventOperation' columnTitle className='overflow'>建议操作</TableHeaderColumn>
          </BootstrapTable>
        </Tab>
        <Tab eventKey={quiescentPoint} title={'静态点'} >
          <BootstrapTable
            data={allPoints}
            scrollTop={'Bottom'}
            cellEdit={isShow ? {} : {mode: 'dbclick', blurToSave: true, afterSaveCell: this.saveQuiescentPoint}}
            selectRow={isShow ? {} : {mode: 'checkbox', clickToSelect: true, onSelect: onSelect, onSelectAll: onSelectAll}}
            striped
            hover={!isShow}
            options={{noDataText: '无数据'}}
          >
            <TableHeaderColumn width='50' dataField='id' isKey className='overflow'>序号</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='name' columnTitle className='overflow'>名称</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='description' columnTitle className='overflow'>描述</TableHeaderColumn>
            <TableHeaderColumn width='200' dataField='formula' customEditor={{getElement: createFormulaInput, customEditorParameters: {data: formulaData}}} columnTitle className='overflow' editColumnClassName='formula'>公式</TableHeaderColumn>
          </BootstrapTable>
        </Tab> */}