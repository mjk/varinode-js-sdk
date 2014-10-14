/**
 * Copyright (c) 2014.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

var bunyan = require('bunyan');

var log = bunyan.createLogger({
    name: 'varinode-api',
    streams: [
            {
                level: 'info',
                stream: process.stderr
            },
            {
                level: 'trace',
                path: '/tmp/varinode.out'
            }
    ]
});

log.level(bunyan.OFF);
module.exports = log;
