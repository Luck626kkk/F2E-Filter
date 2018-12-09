import React, { Component } from 'react';
import './index.css';

// export const test = (i) =>{
//     alert(i);
   
// }


let data=[];


class index extends Component {
    constructor(props){
        super(props);
        this.state={
           searchWord:props.searchWord,
           selectWord:'全部',
        }
        this.clearSelect=this.clearSelect.bind(this)
        
    }
    clearSelect(){
        this.setState({selectWord:'全部'});
        document.getElementById('location').selectedIndex = 0;
        
    }
    componentDidMount(){
        
    }
    componentWillReceiveProps(nextProps){
        //當 props 改變 需要設定新的 state
        this.setState({searchWord:nextProps.searchWord},function(){
        
        })
  
    }
    render(){
        //console.log(this.state.searchWord);
        
        return(
            <div className="content">
                <div className="left-bar">
                    <div className="filter-item">
                        <h2 className="title">地區</h2>
                        <div className="select-style">
                            <select id="location" onChange={this.selectChange.bind(this)}>
                            <option value="全部">全部</option>
                            <option value="三民區">三民區</option>
                            <option value="前鎮區">前鎮區</option>
                            <option value="苓雅區">苓雅區</option>
                            <option value="仁武區">仁武區</option>
                            <option value="楠梓區">楠梓區</option>
                            <option value="左營區">左營區</option>
                            <option value="鼓山區">鼓山區</option>
                            <option value="鹽埕區">鹽埕區</option>
                            <option value="前金區">前金區</option>
                            <option value="新興區">新興區</option>
                            <option value="旗津區">旗津區</option>
                            <option value="小港區">小港區</option>
                            <option value="鳳山區">鳳山區</option>
                            <option value="大寮區">大寮區</option>
                            <option value="鳥松區">鳥松區</option>
                            <option value="林園區">林園區</option>
                            <option value="大樹區">大樹區</option>
                            <option value="大社區">大社區</option>
                            <option value="岡山區">岡山區</option>
                            <option value="路竹區">路竹區</option>
                            <option value="橋頭區">橋頭區</option>
                            <option value="梓官區">梓官區</option>
                            <option value="彌陀區">彌陀區</option>
                            <option value="永安區">永安區</option>
                            <option value="燕巢區">燕巢區</option>
                            <option value="田寮區">田寮區</option>
                            <option value="阿蓮區">阿蓮區</option>
                            <option value="茄萣區">茄萣區</option>
                            <option value="湖內區">湖內區</option>
                            <option value="旗山區">旗山區</option>
                            <option value="美濃區">美濃區</option>
                            <option value="內門區">內門區</option>
                            <option value="杉林區">杉林區</option>
                            <option value="甲仙區">甲仙區</option>
                            <option value="六龜區">六龜區</option>
                            <option value="茂林區">茂林區</option>
                            <option value="桃源區">桃源區</option>
                            <option value="那瑪夏區">那瑪夏區</option>
                            </select>
                        </div>
                    </div>
                    <p className="total">總共搜尋到 100 筆資料</p>
                </div>


                <div className="right-bar">
                    <Search searchWord={this.state.searchWord} selectWord={this.state.selectWord} deleteSearch={this.props.deleteSearch} clearSelect={this.clearSelect}/>
                    <Items filterWord={this.state.searchWord} filterLocation={this.state.selectWord}/>
                   
                </div>
            </div>
            
        );
        
    }
    selectChange(){
        let select = document.getElementById('location').value ;
        this.setState({selectWord:select},function(){
           // console.log(this.state.selectWord)
        });
       
       
    }
 
}

class Pages extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
        
    }
    componentDidMount(){
        
    }
    

    render(){
        //console.log(this.props.pageCount);
        //console.log(this.props.nowPage);
       
        let pageChild =[];
        if(this.props.pageCount < 8 ){
            for(let i=1;i<=this.props.pageCount;i++){
                // 找到目前page 給予bg_color
                pageChild.push(<li className={`page  ${this.props.nowPage === i? 'now-page': ''}`} onClick={() => this.props.updatePageC(i)}  >{i}</li>)
            }
        }else{
            //判斷目前頁數是否等於第一頁 or 第二頁 or 最後一頁 or 倒數第二頁
            if(this.props.nowPage === 1 || this.props.nowPage === 2 || this.props.nowPage === this.props.pageCount || this.props.nowPage === this.props.pageCount - 1){
                for(let i=1;i<=3;i++){
                    pageChild.push(<li className={`page  ${this.props.nowPage === i? 'now-page': ''}`} onClick={() => this.props.updatePageC(i)} >{i}</li>)
                }
                pageChild.push(<li className="page">...</li>)
                for(let i=this.props.pageCount-2; i <= this.props.pageCount ;i++){
                    pageChild.push(<li className={`page  ${this.props.nowPage === i? 'now-page': ''}`} onClick={() => this.props.updatePageC(i)} >{i}</li>)
                }
            }else{
                pageChild.push(<li className={`page  ${this.props.nowPage === 1? 'now-page': ''}`} onClick={() => this.props.updatePageC(1)} >1</li>)
                pageChild.push(<li className="page">...</li>)
                pageChild.push(<li className="page" onClick={() => this.props.updatePageC(this.props.nowPage - 1)} > {this.props.nowPage - 1} </li>)
                pageChild.push(<li className="page now-page" onClick={() => this.props.updatePageC(this.props.nowPage)}> {this.props.nowPage} </li>)
                pageChild.push(<li className="page" onClick={() => this.props.updatePageC(this.props.nowPage + 1)} > {this.props.nowPage + 1} </li>)
                pageChild.push(<li className="page">...</li>)
                pageChild.push(<li className="page" onClick={() => this.props.updatePageC(this.props.pageCount)}> {this.props.pageCount} </li>)
            }
        }

        return(
            <div className="pages">
                <ul>
                    <li><img className="left-arrow" src={require('../../image/left-arrow.png')} alt=""/></li>
                    {pageChild}
                    <li><img className="right-arrow" src={require('../../image/right-arrow.png')} alt=""/></li>
                </ul>
            </div>
        );
    }
    
   
}




class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
        
    }
    componentDidMount(){
        //this.props.clearSelect();
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
  
    }

    render(){
        //console.log(this.props.searchWord)
        let searchElement, selectElement;
        if(this.props.searchWord !== ''){
            searchElement = 
                        <div className="search-item">{this.props.searchWord}
                            <img src={require('../../image/delete.png')} alt="" onClick={this.onSearchClick.bind(this)}/>
                        </div>
        }else{
            searchElement= ''
        }

        if(this.props.selectWord !== '' && this.props.selectWord !== '全部'){
            selectElement = 
                        <div className="search-item">{this.props.selectWord}
                            <img src={require('../../image/delete.png')} alt="" onClick={this.onSelectClick.bind(this)}/>
                        </div>
        }else{
            selectElement= ''
        }

        return(
            <div className="search-items">
                {searchElement}
                {selectElement}
            </div>
        );
       

    }
    onSearchClick(){
        document.getElementById('search').value= '';
        this.props.deleteSearch();
    }
    onSelectClick(){
        this.props.clearSelect();
    }
}

class Items extends Component{
    
    constructor(props){
        super(props);
        this.state={
            nowData: [],
            pageSum: 0,
            nowPage: 1,
            dataStart:0,
            dataEnd: 0,

        };
        this.updatePage = this.updatePage
        
    }
   
    updatePage = (i) => {
      
      
        let makeUpdate = ()=>{
            //testt = this.state.nowData.slice(this.state.dataStart,this.state.dataEnd);
            //console.log('chage nowpage= '+ this.state.nowPage)
            //console.log(this.state.dataStart,this.state.dataEnd)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        this.setState({nowPage: i },function(){

            if(this.state.pageSum === 1){
                this.setState({dataStart:1});
                this.setState({dataEnd:this.state.nowData.length},function(){
                    makeUpdate();
                }); 
                
               
            }else if(this.state.nowPage !== this.state.pageSum){
               
                this.setState({dataStart: (this.state.nowPage-1) *10 +1}); 
                this.setState({dataEnd:this.state.nowPage*10},function(){
                    makeUpdate();
                }); 
               
            }else{
                this.setState({dataStart: (this.state.nowPage-1) *10 +1});
                this.setState({dataEnd: this.state.nowData.length},function(){
                    makeUpdate();
                });
            }


            
        })  
    }
   

    componentDidMount(){
        this.getData();
    
       
       
    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps);
        // console.log(this.state.nowData)
        let filter;
        if(nextProps.filterWord !=='' && nextProps.filterLocation !== '全部'){

            filter = data.filter(function(item, index, array){
                return item.Toldescribe.indexOf(nextProps.filterWord) !== -1  || item.Add.indexOf(nextProps.filterLocation) !== -1 ;
            });
            this.setState({nowData:filter,dataStart:0},function(){
                this.getPages();
            })
        }else if(nextProps.filterWord !==''){

            filter = data.filter(function(item, index, array){
                return item.Toldescribe.indexOf(nextProps.filterWord) !== -1 ;
            });
            this.setState({nowData:filter,dataStart:0},function(){
                this.getPages();
            })

        }else if((nextProps.filterLocation !== '全部')){
            console.log('gg')
            filter = data.filter(function(item, index, array){
                return item.Add.indexOf(nextProps.filterLocation) !== -1 ;
            });
            this.setState({nowData:filter,dataStart:0},function(){
                this.getPages();
            })
        }else{
            this.setState({nowData:data,dataStart:0},function(){ 
                this.getPages();
            })
        }
        
        
    }


    getData = () => {
        const url ="https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97";
        fetch(url,{mode:'cors',method: "GET"}).then((response) => {
            // 這裡會得到一個 ReadableStream 的物件
            //console.log(response);
            // 可以透過 blob(), json(), text() 轉成可用的資訊
            return response.json();
            }).then((jsonData) => {
                ////console.log(jsonData.result); //只需要 result 的資料
                data = jsonData.result.records;
                ////console.log(data);
                this.setState({nowData:data},function(){
                    this.getPages(); //function----------------------------------
                   
                });
                //console.log(this.state.nowData);

                //找出資料頁數 (一頁10筆)
                // if(this.state.nowData.length % 10 === 0){
                //     this.setState({pageSum: this.state.nowData.length / 10});             
                // }else{
                //     this.setState({pageSum: this.state.nowData.length / 10 + 1});
                // }

                //先給假的資料頁數----------------------------------------------------------------------------------
                //this.setState({pageSum: 7});

                

   
            }).catch((err) => {
                //console.log('錯誤:', err);
        });
    }
    getPages(){
        //console.log(this.state.nowData.length)
        if(this.state.nowData.length % 10 === 0){
            this.setState({pageSum: this.state.nowData.length / 10});             
        }else{
            this.setState({pageSum: this.state.nowData.length / 10 + 1});
        }
        this.setState({dataEnd:this.state.nowData.length > 10? 10: this.state.nowData.length}); //設定第一頁的資料數量 如果大於10 就等於10
    }

    render(){
      
        let test =this.state.nowData.slice(this.state.dataStart,this.state.dataEnd);
        //console.log(test,this.state.dataStart,this.state.dataEnd);

        const itemElements = test.map((item) => {
            return(
                <div className="item">
                    <img className="pic" src={item.Picture1} alt=""/>
                    <div className="item-content">
                        <h2>{item.Name}</h2>
                        <p className="info">{item.Description}</p>
                        <div className="local">
                            <img className="local-icon" src={require('../../image/local.png')}  alt=""/>
                            <p className="localtion">{item.Add}</p>
                        </div>
                        <div className="open">
                            <img className="open-icon" src={require('../../image/open.png')}  alt=""/>
                            <p className="open-info">{item.Opentime}</p>
                        </div>
                    </div>
                </div>
            )
        });

        
        return(
            <div className="items">
               {itemElements}
                <Pages pageCount={this.state.pageSum} nowPage={this.state.nowPage} updatePageC={this.updatePage} />
            </div>
        )
    }



}

export default index;