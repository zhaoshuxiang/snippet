describe('Util', function() {
    describe('#convert', function() {
        it('NaN should return " "', function() {
            Util.convert(NaN).should.equal('');
        });

        it('1 should return 1B', function() {
            Util.convert(1).should.equal('1B');
        });

        it('1024 should return 1KB', function() {

            Util.convert(1024).should.equal('1KB');
        });

        it('1048576 should return 1MB', function() {

            Util.convert(1048576).should.equal('1MB');
        });

        it('', function() {
            Util.convert(1025, 2).should.equal('1.00KB');
        });
    });

    describe('#getUrlParams', function() {
        it('?abc=1234 should be 1234', function() {
            Util.getUrlParams('?abc=1234', 'abc').should.equal('1234');
        });
    });

    describe('#subStr', function() {
        before(function() {
            var Random = Mock.Random;
            var i = 0;

            console.log(Random.image());
        });

        it('测试纯英文', function() {
            Util.subStr('abcdef', 2).should.equal('ab');
            Util.subStr('a  bcdef', 2).should.equal('a ');
        });

        it('测试纯中文', function() {
            Util.subStr('完全是纯中文', 4).should.equal('完全');
        });

        it('测试纯中英混合', function() {
            Util.subStr('完a全b', 4).should.equal('完a');
        });
    });
});