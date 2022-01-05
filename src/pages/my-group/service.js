import fetch from '../../common/fetch';

export function getAllLabEvents(subjectID) {
  return fetch({
    url: '/allLabEvents',
    method: 'get',
    params: { subjectID },
  });
}
