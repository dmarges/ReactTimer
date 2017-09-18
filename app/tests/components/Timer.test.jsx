var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('starting the timer', () => {
    it('should start counting up when started', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(0);

      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        done();
      }, 3001);
    });

    it('should pause counting up when paused', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(0);

      setTimeout(() => {
        timer.handleStatusChange('paused');

        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(3);

        done();
      }, 3001);
    });

    it('should clear the count when stopped', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(0);

      setTimeout(() => {
        timer.handleStatusChange('stopped');

        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);

        done();
      }, 3001);
    });
  });
});
