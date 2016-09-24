//스펙이라는 이름을 가진애들은 테스트 코드다

//특정기능에 대한 성능을 확인할 수 있기 때문에 명칭을 다음과 같이 사용한다.
const should = require('should');//노드에서 제공해주는 밸리데이터
const request = require('supertest');
const app = require('../../app');

describe('GET /users', () => {//GET users를 테스트 하기 위한 테스트 환경
  // body...
  it('should return 200 status code', (done)=>{
    //should.equal(true, true);//두 값이 같으면 성공
    //(true).should.be.equal(true);
    request(app)
      .get('/users')
      .expect(200)
      .end((err, res)=>{
          if(err) throw err;

          res.body.should.be.instanceOf(Array);
          res.body.should.be.have.length(3);
          res.body.forEach(user => {
            user.should.be.hava.properties('id', 'name');
            user.id.should.be.a.Number();
            user.name.should.be.a.String();
          });
          done();
      });
  });
});



})
