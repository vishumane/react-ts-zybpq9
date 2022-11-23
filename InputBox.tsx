import * as React from 'react';
import PropTypes from 'prop-types';
const InputBox = ({ onChange, value }) => {
  console.log(value);
  return (
    <div>
      <input
        type="tyep"
        value={value}
        name="name"
        className="form-control"
        placeholder="test"
        onChange={onChange}
      />
    </div>
  );
};
InputBox.propTypes = {
  value: PropTypes.string,
  onchange: PropTypes.func,
};
InputBox.defaultProps = {
  value: '',
  onchange: '',
};
export default InputBox;
