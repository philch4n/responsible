/**
 *  Top-most React component.
 *  Render simply renders its children.
 *
**/
export default React.createClass({
  render: function() {
    return this.props.children;
  };
});
