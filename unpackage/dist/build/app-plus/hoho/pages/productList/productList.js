
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{background:#f8f8f8}\nwx-view{font-size:",[0,28],"}\n.",[1],"uni-product-list{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"uni-product,.",[1],"uni-product-list{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal}\n.",[1],"uni-product{padding:",[0,20],";-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"image-view{margin:",[0,12]," 0}\n.",[1],"image-view,.",[1],"uni-product-image{height:",[0,330],";width:",[0,330],"}\n.",[1],"uni-product-title{width:",[0,300],";word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}\n.",[1],"uni-product-price{margin-top:",[0,10],";font-size:",[0,28],";line-height:1.5;position:relative}\n.",[1],"uni-product-price-original{color:#e80080}\n.",[1],"uni-product-price-favour{color:#888;text-decoration:line-through;margin-left:",[0,10],"}\n.",[1],"uni-product-tip{position:absolute;right:",[0,10],";background-color:#f33;color:#fff;padding:0 ",[0,10],";border-radius:",[0,5],"}\n",],undefined,{path:"./pages/productList/productList.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/productList/productList.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      