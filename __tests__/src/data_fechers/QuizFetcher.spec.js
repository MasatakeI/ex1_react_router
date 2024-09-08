import QuizFetcher from "../../../src/data_fetchers/QuizFetcher";


describe('QuizFetcherのテスト',()=>{

    describe('fetchクラスメソッド',()=>{
        it('10件のクイズデータが手に入る',async()=>{
            const data=await QuizFetcher.fetch();
            expect(Array.isArray(data.results)).toStrictEqual(true);
            expect(data.results.length).toStrictEqual(10);

            data.results.forEach(quiz => {
                expect(typeof quiz.type).toStrictEqual('string');
                expect(typeof quiz.difficulty).toStrictEqual('string');
                expect(typeof quiz.category).toStrictEqual('string');
                expect(typeof quiz.question).toStrictEqual('string');
                expect(typeof quiz.correct_answer).toStrictEqual('string');

                const incorrectAnswers=quiz.incorrect_answers;
                expect(Array.isArray(incorrectAnswers)).toStrictEqual(true);
                expect(incorrectAnswers.length).toStrictEqual(3);

                incorrectAnswers.forEach((answer)=>{
                    expect(typeof answer).toStrictEqual('string');
                });
            });
            
        });
    });
});