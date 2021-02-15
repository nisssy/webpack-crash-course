import Tiger  from './utilities';
import _ from 'lodash';

function component() {
  console.log(Tiger.say())
  const element = document.createElement('div');
  const array = ['Hello','webpack','!!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
