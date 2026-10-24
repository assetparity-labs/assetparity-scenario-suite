const snapshot={sender:'200000000',recipient:'0'};
const ok=(kind,before,after)=>({kind,status:'SUCCESS',before,after,feeChargedStroops:kind==='fixture'?null:'100'});
const bad=(kind,error,errorCode=null,before=snapshot)=>({kind,status:kind==='simulation'?'REJECTED':'FAILED',error,errorCode,before,after:before,feeChargedStroops:kind==='simulation'?null:'100'});
export const sample={schema:1,network:'synthetic',asset:{code:'PARITY',issuer:'G'+'A'.repeat(55)},participants:{sender:'G'+'B'.repeat(55),recipient:'G'+'C'.repeat(55)},provenance:'Synthetic declared observations; not verified transaction evidence',cases:[
{id:'fractional-transfer',amountUnits:'12345678',classic:ok('fixture',snapshot,{sender:'187654322',recipient:'12345678'}),sac:ok('fixture',snapshot,{sender:'187654322',recipient:'12345678'})},
{id:'one-stroop',amountUnits:'1',classic:ok('fixture',snapshot,{sender:'199999999',recipient:'1'}),sac:ok('fixture',snapshot,{sender:'199999999',recipient:'1'})},
{id:'insufficient-balance',amountUnits:'10000000000',classic:bad('fixture','payment_underfunded'),sac:bad('fixture',null,10)},
{id:'unauthorized-recipient',amountUnits:'1',classic:bad('fixture','payment_not_authorized'),sac:bad('fixture',null,11)},
{id:'missing-trustline',amountUnits:'1',classic:bad('fixture','payment_no_trust',null,{sender:'200000000',recipient:null}),sac:bad('fixture',null,13,{sender:'200000000',recipient:null})}
]};
