(this["webpackJsonphotkeys-js"]=this["webpackJsonphotkeys-js"]||[]).push([[169],{211:function(t,e){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var e,a,s,n=t.languages,p={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css},i={"application/json":!0,"application/xml":!0};for(var r in p)if(p[r]){e=e||{};var o=i[r]?(s=(a=r).replace(/^[a-z]+\//,""),"(?:"+a+"|\\w+/(?:[\\w.-]+\\+)+"+s+"(?![+\\w.-]))"):r;e[r.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+o+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:p[r]}}e&&t.languages.insertBefore("http","header-name",e)}(Prism)}}]);
//# sourceMappingURL=169.5debb093.chunk.js.map