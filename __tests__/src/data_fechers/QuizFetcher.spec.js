import QuizFetcher from "../../../src/data_fetchers/QuizFetcher";


describe('QuizFetcherのテスト',()=>{

    describe('fetchクラスメソッド',()=>{
        it('10件のクイズデータが手に入る',async()=>{
            const data=await QuizFetcher.fetch();
            console.log(data);
            
        });
    });
});