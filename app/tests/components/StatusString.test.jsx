var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

var StatusString = require('StatusString');

describe('StatusString', () => {
  it('should exist', () => {
    expect(StatusString).toExist();
  });

  describe('render', () => {
    it('should render status string', () => {
        var statusString = TestUtils.renderIntoDocument(<StatusString statusString={'Test string'}/>);
        var $el = $(ReactDOM.findDOMNode(statusString));
        var actualText = $el.find('.statusString').text();

        expect(actualText).toBe('Test string');

    });
  });
});