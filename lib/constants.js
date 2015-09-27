/**
* @module kad/constants
*/

'use strict';

/**
* Protocol constants
* #exports
* @see http://xlattice.sourceforge.net/components/protocol/kademlia/specs.html#constants
*/
module.exports = {

  ALPHA: 3,
  B: 160,
  K: 20,

  T_REFRESH: 3600000,
  T_REPLICATE: 3600000,
  T_REPUBLISH: 86400000,

  // T_EXPIRE is 5s higher than protocol spec to avoid republish race condition
  T_EXPIRE: 86405000,

  T_RESPONSETIMEOUT: 2000,

  MESSAGE_TYPES: [
    'PING',
    'PONG',
    'STORE',
    'STORE_REPLY',
    'FIND_NODE',
    'FIND_NODE_REPLY',
    'FIND_VALUE',
    'FIND_VALUE_REPLY'
  ]

};
