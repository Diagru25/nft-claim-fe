(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5767)}])},5767:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return A}});var i=t(5893);function a(){return(0,i.jsx)("div",{className:"px-10 py-4 h-24 w-full"})}var r=t(5764),n=t(5675),l=t.n(n),o=t(4226);function c(){return(0,i.jsxs)("div",{className:"p-10 mb-10 relative",children:[(0,i.jsx)("div",{className:" text-gray-400",children:(0,i.jsxs)("div",{className:"pl-10",children:[(0,i.jsxs)("h1",{className:"text-5xl my-9 font-bold text-white",children:["Meet ",(0,i.jsx)("span",{className:"text-orange-400",children:"Ai"}),"Shiba"]}),(0,i.jsx)("h4",{className:"my-2 font-bold",children:"The Community-inspired meme coin for arbitrum blockchain"}),(0,i.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,i.jsx)(r,{className:"w-6 h- stroke-white"}),(0,i.jsx)("p",{className:"my-4",children:"Zero FUD"})]}),(0,i.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,i.jsx)(r,{className:"w-6 h-6 stroke-white"}),(0,i.jsx)("p",{className:"my-4",children:"100% Community Owned"})]}),(0,i.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,i.jsx)(r,{className:"w-6 h-6 stroke-white"}),(0,i.jsx)("p",{className:"my-4",children:"Zero FUGAZI"})]})]})}),(0,i.jsx)(l(),{src:o.Z,alt:"img",style:{position:"absolute",left:"50%",top:"-1%",width:"40%"}})]})}var d=t(7294);function h(e){let{value:s="",onChange:t,...a}=e;return(0,i.jsxs)("div",{className:"relative w-full rounded-md ",children:[(0,i.jsx)("label",{htmlFor:"price",className:"block absolute text-sm font-light leading-6 text-sky-400 -top-3 left-2 bg-white px-1.5",children:"Your Airdrop Allocation"}),(0,i.jsx)("input",{style:{fontSize:"1.125rem"},type:"text",id:"price",className:"block w-full rounded-md  py-4 px-7 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 text-lg outline outline-gray-400 focus:outline-sky-500",placeholder:"0.00",value:s,onChange:t,...a})]})}var m=t(2175),x=t(6310);let u={1:"firstTab",2:"secondTab"};function p(){let[e,s]=(0,d.useState)(u[1]);return(0,i.jsxs)(d.Fragment,{children:[(0,i.jsx)("div",{className:"mt-52",children:(0,i.jsx)("div",{className:"mt-10",children:(0,i.jsxs)("div",{className:"m-auto p-10 max-w-3xl w-full bg-white rounded-2xl",children:[(0,i.jsxs)("div",{className:"border-b border-solid flex gap-5 w-full mb-2",children:[(0,i.jsx)("div",{className:" ".concat(e===u[1]?"border-b border-sky-500 text-sky-500":""," w-fit px-2 hover:cursor-pointer"),onClick:()=>s(u[1]),children:"NFT ClAIM"}),(0,i.jsx)("div",{className:" ".concat(e===u[2]?"border-b border-sky-500 text-sky-500":""," w-fit px-2 hover:cursor-pointer"),onClick:()=>s(u[2]),children:"ARB/OG CLAIM"})]}),e===u[1]?(0,i.jsx)(f,{}):(0,i.jsx)(j,{})]})})}),(0,i.jsx)("hr",{className:"w-[50%] max-w-3xl m-auto my-10"})]})}let b={1:"Early Birds",2:"Arb Claimooorssss"},j=()=>{let e=(0,m.TA)({initialValues:{nftNumber:"",selectedType:""},validationSchema:x.Ry().shape({nftNumber:x.Z_().required("Value is not Empty"),selectedType:x.Z_().required("You must select.")}),onSubmit:s=>{console.log(s),e.resetForm()}});return(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("h3",{className:"text-xl font-bold my-4",children:"Claim Airdrop"}),(0,i.jsx)("p",{className:"font-light my-4",children:"Who is eligible??"}),(0,i.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,i.jsx)(r,{className:"w-6 h-6 stroke-black"}),(0,i.jsx)("p",{className:"my-3 font-bold",children:"Early Birds"})]}),(0,i.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,i.jsx)(r,{className:"w-6 h-6 stroke-black"}),(0,i.jsx)("p",{className:"my-3 font-bold",children:"Arb Claimooorssss"})]}),(0,i.jsx)("p",{className:"font-light mb-2 text-gray-500",children:"Choose A Side"}),(0,i.jsxs)("div",{className:"flex gap-4 font-light pb-4",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("input",{type:"radio",checked:e.values.selectedType===b[1],className:"h-5 w-5",onChange:s=>{let t=s.target.checked;t&&e.setFieldValue("selectedType",b[1])}}),(0,i.jsx)("span",{children:"Early Birds"})]}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("input",{type:"radio",checked:e.values.selectedType===b[2],className:"h-5 w-5",onChange:s=>{let t=s.target.checked;t&&e.setFieldValue("selectedType",b[2])}}),(0,i.jsx)("span",{children:"Arb Claimooorssss"})]}),e.errors.selectedType&&(0,i.jsx)("span",{className:"text-red-500 text-xs",children:e.errors.selectedType})]}),(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)(h,{name:"nftNumber",onChange:e.handleChange,value:e.values.nftNumber}),e.errors.nftNumber&&(0,i.jsx)("span",{className:"text-red-500 text-xs",children:e.errors.nftNumber})]}),(0,i.jsx)("button",{className:"mt-5 rounded-md text-white bg-sky-600 border px-4 py-2 hover:bg-sky-500",onClick:e.submitForm,children:"CONNECT WALLET"})]})},f=()=>{let e=(0,m.TA)({initialValues:{nftNumber:""},validationSchema:x.Ry().shape({nftNumber:x.Z_().required("Value is not Empty")}),onSubmit:s=>{console.log(s),e.resetForm()}});return(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("h3",{className:"text-xl font-bold my-4",children:"Claim Airdrop For Your NFT"}),(0,i.jsx)("p",{className:"font-light my-4",children:"Who is eligible??"}),(0,i.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,i.jsx)(r,{className:"w-6 h-6 stroke-black stroke-2"}),(0,i.jsx)("p",{className:"my-4 font-bold",children:"AiShiba OG Collection NFT Holder"})]}),(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)(h,{name:"nftNumber",onChange:e.handleChange,value:e.values.nftNumber}),e.errors.nftNumber&&(0,i.jsx)("span",{className:"text-red-500 text-xs",children:e.errors.nftNumber})]}),(0,i.jsx)("button",{className:"mt-5 rounded-md text-white bg-sky-600 border px-4 py-2 hover:bg-sky-500",onClick:e.submitForm,children:"CONNECT WALLET"})]})};function y(e){let{children:s,title:t}=e;return(0,i.jsxs)("div",{className:"flex-1 p-4 border-r border-r-white",children:[(0,i.jsx)("h2",{className:"text-2xl my-5 font-bold",children:t}),s]})}function N(){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"px-10 my-10 text-white",children:[(0,i.jsx)("h1",{className:"text-5xl my-9 font-bold text-white",children:"Perks"}),(0,i.jsxs)("div",{className:" flex bg-orange-600 text-white",children:[(0,i.jsxs)(y,{title:"OwnerShip",children:[(0,i.jsx)("p",{children:"By owning one of our 48000 AiShiba OG Collection, you automatically become an early member of AiShiba army."}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"All NFT holders are eligible for our upcoming airdrop and future events."}),(0,i.jsx)("a",{children:"Collection already sold out you can get from opensea"})]}),(0,i.jsxs)(y,{title:"100% Community-Owned",children:[(0,i.jsx)("p",{children:"AiShiba is built different that is why we are allocating 100% of our tokens to the community to decide the value of the project."}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"NOTE: NO TOKEN IS ALLOCATED TO TEAM"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"and it even gets better"})]}),(0,i.jsx)(y,{title:"Locked Liquidity",children:(0,i.jsx)("p",{children:"The hallmark of every great project is transparency and fairness. Inorder to ensure the safety of our investors, we will lock liquidity to boost investors confidence and ensure we continue building long term"})}),(0,i.jsxs)(y,{title:"Earn Rewards for holding $SHIBAI Token",children:[(0,i.jsx)("p",{children:"Arb Rewards will be distributed to top 500 holders weekly as a way to earn passive income"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"You can also stake your NFT and SHIBAI to earn ARB token"})]})]})]})})}function g(){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"px-10 my-10 text-white",children:[(0,i.jsx)("h1",{className:"text-5xl my-9 font-bold text-white",children:"Tokenomics"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"text-gray-400",children:"SHIBAI is the fundamental token within the AiShiba ecosystem. It possesses powerful deflationary attributes and offers users the opportunity to generate passive income via staking, thereby establishing enduring value for the token."}),(0,i.jsx)("h3",{className:"text-[1.125rem] my-5 font-bold",children:"Total Supply : 210,000,000,000,000,000 tokens"}),(0,i.jsx)("h3",{className:"text-[1.125rem] my-5 font-bold",children:"Token Symbol : $SHIBAI"}),(0,i.jsx)("h3",{className:"text-[1.125rem] my-2 font-bold",children:"Token Allocation :"}),(0,i.jsx)("h3",{className:"text-[1.125rem] my-2 font-bold",children:"90% distributed as airdrop to eligible wallets"}),(0,i.jsx)("h3",{className:"text-[1.125rem] my-2 font-bold",children:"10% DEX Liquidity and CEX Listing"}),(0,i.jsx)("p",{className:"text-gray-400",children:"Our tokenomics and airdrop eligibility criteria is fully explained in ourwhitepaper"})]})]})})}function v(e){let{contents:s=[],title:t}=e;return(0,i.jsxs)("div",{className:"p-3 border-2 border-orange-500",children:[(0,i.jsx)("h2",{className:"text-2xl my-5 font-bold",children:t}),(0,i.jsx)("ul",{className:"pl-4 font-extralight",children:s.map((e,s)=>(0,i.jsxs)("li",{className:"pb-1",children:[(0,i.jsx)("span",{className:"pr-2 text-xl",children:"•"})," ",e]},s))})]})}let w=[{title:"Phase 1: Pre-Launch",children:["Conduct market research to determine the demand for a new memecoin project.","Develop a comprehensive whitepaper that outlines the project’s goals, features, and roadmap","Build a team of developers, marketers, and community managers to help execute the project.","Launch website and social media channels to start building a community and generating buzz."]},{title:"Phase 2: Token Creation and Distribution",children:["Launch the AiShiba OG NFT Collection.","Launch the token on a decentralized exchange (DEX) platform, such as Uniswap or Camelot Dex.","Set a total supply for the token and decide on an initial distribution strategy for airdrops and work with auditors to ensure the token’s code is secure and free from vulnerabilities."]},{title:"Phase 3: Initial Exchange Listing",children:["Apply for AiShiba listing on major centralized exchanges (CEX) such as Mexc, Binance, Coinbase, or Kraken.","Engage in marketing efforts to increase the token’s visibility and attract investors.","Coingecko and CoinMarket listings."]},{title:"Phase 4: Community Building and Growth",children:["Launch a community forum and engage with Aishiba Arb token holders to gather feedback and improve the project.","Host events and promotions to incentivize people to hold and use the token, such as contests or giveaways.","Build partnerships with other projects and influencers to expand Aishiba Arb’s reach."]},{title:"Phase 5: Project Expansion",children:["Launch additional features, such as staking or yield farming, to provide additional benefits to Aishiba Arb token holders.","Develop a mobile wallet or other tools to make it easier for people to use and hold the token.","Explore opportunities to integrate Aishiba Arb into other blockchain ecosystems, such as DeFi protocols or NFT marketplaces."]},{title:"Phase 6: Long-Term Sustainability",children:["Continue to build and engage with the Aishiba Arb community to ensure the project’s longevity.","Explore options for governance and decentralization to make the project more community-driven and sustainable over the long term.","Work with regulators and compliance experts to ensure that Aishiba Arb remains compliant with applicable laws and regulations."]}];function k(){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"px-10 my-10 text-white",children:[(0,i.jsx)("h1",{className:"text-5xl my-9 font-bold text-white",children:"Roadmap"}),(0,i.jsx)("div",{className:"flex flex-col gap-5 text-white border-l-4 border-l-white pl-8",children:w.map((e,s)=>(0,i.jsx)(v,{title:e.title,contents:e.children},s))})]})})}function A(){return(0,i.jsxs)("main",{children:[(0,i.jsx)(a,{}),(0,i.jsx)(a,{}),(0,i.jsx)(c,{}),(0,i.jsx)(p,{}),(0,i.jsx)(N,{}),(0,i.jsx)(g,{}),(0,i.jsx)(k,{})]})}}},function(e){e.O(0,[300,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);