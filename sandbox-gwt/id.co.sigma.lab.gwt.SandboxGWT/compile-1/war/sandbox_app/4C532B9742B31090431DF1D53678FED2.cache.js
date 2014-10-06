var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.sandbox_app;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.6.1";
var $strongName = '4C532B9742B31090431DF1D53678FED2';
var $doc = $wnd.document;function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var _, seedTable = {}, Q$Object = 0, Q$String = 1, Q$JavaScriptException = 2, Q$Throwable = 3, CM$ = {};
function newSeed(id_0){
  return new seedTable[id_0];
}

function defineSeed(id_0, superSeed, castableTypeMap){
  var seed = seedTable[id_0];
  if (seed && !seed.___clazz$) {
    _ = seed.prototype;
  }
   else {
    if (!seed) {
      seed = seedTable[id_0] = function(){
      }
      ;
    }
    _ = seed.prototype = superSeed < 0?{}:newSeed(superSeed);
    _.castableTypeMap$ = castableTypeMap;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  if (seed.___clazz$) {
    _.___clazz$ = seed.___clazz$;
    seed.___clazz$ = null;
  }
}

function $$init_15(){
}

function $clinit_SeedUtil(){
}

function makeCastMap(a){
  var result = {};
  for (var i = 0, c = a.length; i < c; ++i) {
    result[a[i]] = 1;
  }
  return result;
}

function nullMethod(){
}

function $$init(){
}

function $hashCode(this$static){
  return getHashCode(this$static);
}

function Object_1(){
  $$init();
}

defineSeed(1, -1, CM$, Object_1);
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return $hashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(this.___clazz$) + '@' + toHexString(this.hashCode$());
}
;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
function currentTimeMillis(){
  return (new Date).getTime();
}

function getUncaughtExceptionHandler(){
  return null;
}

function isScript(){
  return true;
}

function log_0(message){
  log_3(message);
}

function reportUncaughtException(e){
  reportUncaughtException_0(e);
}

function $$init_0(){
}

function $fillInStackTrace(this$static){
  fillInStackTrace(this$static);
  return this$static;
}

function $getCause(this$static){
  return this$static.cause;
}

function $getStackTrace(this$static){
  if (jsEquals(this$static.stackTrace, null)) {
    return initDim(_3Ljava_lang_StackTraceElement_2_classLit, CM$, Q$Object, 0, 0);
  }
  return this$static.stackTrace;
}

function $setStackTrace(this$static, stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, CM$, Q$Object, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (isNull(stackTrace[i])) {
      throw new NullPointerException_0;
    }
    copy[i] = stackTrace[i];
  }
  this$static.stackTrace = copy;
}

function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return jsNotEquals(msg, null)?className + ': ' + msg:className;
}

function Throwable_0(){
  Object_1.call(this);
  $$init_0();
  $fillInStackTrace(this);
}

function Throwable_1(message){
  Object_1.call(this);
  $$init_0();
  this.detailMessage = message;
  $fillInStackTrace(this);
}

function Throwable_2(message, cause){
  Object_1.call(this);
  $$init_0();
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineSeed(8, 1, makeCastMap([Q$Throwable]));
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  return $toString(this);
}
;
function $$init_1(){
}

function Exception_0(){
  Throwable_0.call(this);
  $$init_1();
}

function Exception_1(message){
  Throwable_1.call(this, message);
  $$init_1();
}

defineSeed(7, 8, makeCastMap([Q$Throwable]));
function $$init_2(){
}

function RuntimeException_0(){
  Exception_0.call(this);
  $$init_2();
}

function RuntimeException_1(message){
  Exception_1.call(this, message);
  $$init_2();
}

defineSeed(6, 7, makeCastMap([Q$Throwable]), RuntimeException_1);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = nullMethod;
  NOT_SET = new Object_1;
}

function $$init_3(this$static){
  this$static.description = '';
}

function $ensureInit(this$static){
  var exception;
  if (jsEquals(this$static.message_0, null)) {
    exception = $getThrown(this$static);
    this$static.name_0 = getExceptionName(exception);
    this$static.description = this$static.description + ': ' + getExceptionDescription(exception);
    this$static.message_0 = '(' + this$static.name_0 + ') ' + getExceptionProperties(exception) + this$static.description;
  }
}

function $getThrown(this$static){
  return maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
}

function $isThrownSet(this$static){
  return maskUndefined(this$static.e) !== maskUndefined(NOT_SET);
}

function JavaScriptException_0(e){
  $clinit_JavaScriptException();
  JavaScriptException_1.call(this, e, '');
}

function JavaScriptException_1(e, description){
  RuntimeException_0.call(this);
  $$init_3(this);
  this.e = e;
  this.description = description;
  createStackTrace_0(this);
}

function getExceptionDescription(e){
  return instanceOfJso(e)?getExceptionDescription0(dynamicCastJso(e)):e + '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName(e){
  return jsEquals(e, null)?'null':instanceOfJso(e)?getExceptionName0(dynamicCastJso(e)):instanceOf(e, Q$String)?'String':$getName(getClass__devirtual$(e));
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

function getExceptionProperties(e){
  return instanceOfJso(e)?getProperties(dynamicCastJso(e)):'';
}

defineSeed(5, 6, makeCastMap([Q$JavaScriptException, Q$Throwable]), JavaScriptException_0);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return $getThrown(this);
}
;
var NOT_SET;
function $cast(this$static){
  return this$static;
}

function $getClass(){
  return Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function createArray(){
  return [];
}

function createObject(){
  return {};
}

function getClass__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.___clazz$:$getClass();
}

function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

function toStringVerbose(obj){
  var defined = function(m){
    return typeof m != 'undefined';
  }
  ;
  var strip = function(s){
    return s.replace(/\r\n/g, '');
  }
  ;
  if (defined(obj.outerHTML))
    return strip(obj.outerHTML);
  if (defined(obj.innerHTML) && obj.cloneNode) {
    $doc.createElement('div').appendChild(obj.cloneNode(true)).innerHTML;
  }
  if (defined(obj.nodeType) && obj.nodeType == 3) {
    return "'" + obj.data.replace(/ /g, '\u25AB').replace(/\u00A0/, '\u25AA') + "'";
  }
  if (typeof defined(obj.htmlText) && obj.collapse) {
    var html = obj.htmlText;
    if (html) {
      return 'IETextRange [' + strip(html) + ']';
    }
     else {
      var dup = obj.duplicate();
      dup.pasteHTML('|');
      var out = 'IETextRange ' + strip(obj.parentElement().outerHTML);
      dup.moveStart('character', -1);
      dup.pasteHTML('');
      return out;
    }
  }
  return obj.toString?obj.toString():'[JavaScriptObject]';
}

function $get(this$static, index_0){
  return this$static[index_0];
}

function $length(this$static){
  return this$static.length;
}

function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $get_0(this$static, index_0){
  return this$static[index_0];
}

function $length_0(this$static){
  return this$static.length;
}

function $set(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function $$init_4(){
}

function Scheduler_0(){
  Object_1.call(this);
  $$init_4();
}

defineSeed(12, 1, {});
function $clinit_Impl(){
  $clinit_Impl = nullMethod;
  false;
  2000;
  new UnloadSupport_0;
  exportUnloadModule();
}

function apply_0(jsFunction, thisObj, args){
  if (isScript()) {
    return jsFunction.apply(thisObj, args);
  }
   else {
    var __0 = jsFunction.apply(thisObj, args);
    if (__0 != null) {
      __0 = {val:__0};
    }
    return __0;
  }
}

function clearTimeout_0(timerId){
  $clearTimeout(timerId);
}

function dispose(d){
  $clinit_Impl();
  $dispose(d);
}

function enter(){
  var now_0;
  if (entryDepth < 0) {
    debugger;
    throw makeAssertionError_Object('Negative entryDepth value at entry ' + entryDepth);
  }
  if (entryDepth != 0) {
    now_0 = currentTimeMillis();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = watchdogEntryDepthSchedule();
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry(jsFunction){
  return function(){
    try {
      if (isScript()) {
        return entry0(jsFunction, this, arguments);
      }
       else {
        var __0 = entry0(jsFunction, this, arguments);
        if (__0 != null) {
          __0 = __0.val;
        }
        return __0;
      }
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  if ($isUnloadSupported() && isModuleUnloaded()) {
    return null;
  }
  initialEntry = enter();
  try {
    if (jsNotEquals(getUncaughtExceptionHandler(), null)) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, Q$Throwable)) {
          t = $e0;
          reportUncaughtException_0(t);
          return undefined_0();
        }
         else 
          throw unwrap($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (entryDepth < 0) {
    debugger;
    throw makeAssertionError_Object('Negative entryDepth value at exit ' + entryDepth);
  }
  if (initialEntry) {
    if (entryDepth != 0) {
      debugger;
      throw makeAssertionError_Object('Depth not 0' + entryDepth);
    }
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function exportUnloadModule(){
  $exportUnloadModule();
}

function getHashCode(o){
  $clinit_Impl();
  return o.$H || (o.$H = getNextHashId());
}

function getNextHashId(){
  return ++sNextHashId;
}

function isModuleUnloaded(){
  return false;
}

function registerEntry(){
  $clinit_Impl();
  if (isScript()) {
    return entry;
  }
   else {
    return $entry = entry;
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportToBrowser_0(e){
  reportToBrowser(instanceOf(e, Q$JavaScriptException)?dynamicCast(e, Q$JavaScriptException).getThrown():e);
}

function reportUncaughtException_0(e){
  $clinit_Impl();
  var handler;
  isNotNull(uncaughtExceptionHandlerForTest) && null.nullMethod();
  handler = getUncaughtExceptionHandler();
  if (isNotNull(handler)) {
    if (jsEquals(handler, uncaughtExceptionHandlerForTest)) {
      return;
    }
    null.nullMethod();
    return;
  }
  reportToBrowser_0(e);
}

function setTimeout_0(func, time){
  return $setTimeout(func, time);
}

function undefined_0(){
  return;
}

function watchdogEntryDepthCancel(timerId){
  clearTimeout_0(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

function watchdogEntryDepthSchedule(){
  return setTimeout_0(function(){
    watchdogEntryDepthRun();
  }
  , 10);
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = nullMethod;
  INSTANCE = new SchedulerImpl_0;
  1;
  50;
  100;
}

function $$init_5(this$static){
  this$static , false;
  this$static , false;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (isNotNull(this$static.entryCommands)) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this$static.entryCommands));
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (isNotNull(this$static.finallyCommands)) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this$static.finallyCommands));
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl_0(){
  Scheduler_0.call(this);
  $$init_5(this);
}

function createQueue(){
  return $cast(createArray());
}

function push_0(queue, task){
  isNull(queue) && (queue = createQueue());
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  if (isNull(tasks)) {
    debugger;
    throw makeAssertionError_Object('tasks');
  }
  for (i = 0 , j = $length(tasks); i < j; i++) {
    if ($length(tasks) != j) {
      debugger;
      throw makeAssertionError_Object('Working array length changed ' + $length(tasks) + ' != ' + j);
    }
    t = $get(tasks, i);
    try {
      $isRepeating(t)?$executeRepeating(t) && (rescheduled = push_0(rescheduled, t)):$executeScheduled(t);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, Q$Throwable)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineSeed(14, 12, {}, SchedulerImpl_0);
var INSTANCE;
function $executeRepeating(this$static){
  return $getRepeating(this$static).nullMethod();
}

function $executeScheduled(this$static){
  $getScheduled(this$static).nullMethod();
}

function $getRepeating(this$static){
  return this$static[0];
}

function $getScheduled(this$static){
  return this$static[0];
}

function $isRepeating(this$static){
  return this$static[1];
}

function createStackTrace(){
  return (new StackTraceCreator$CollectorChrome_0).collect();
}

function createStackTrace_0(e){
  (new StackTraceCreator$CollectorChrome_0).createStackTrace(e);
}

function extractNameFromToString(fnToString){
  var index_0, start_0, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index_0 = $indexOf_0(fnToString, '(');
  start_0 = $startsWith(fnToString, 'function')?8:0;
  if (index_0 == -1) {
    index_0 = $indexOf(fnToString, 64);
    start_0 = $startsWith(fnToString, 'function ')?9:0;
  }
  index_0 != -1 && (toReturn = $trim($substring_0(fnToString, start_0, index_0)));
  return $length_1(toReturn) > 0?toReturn:'anonymous';
}

function fillInStackTrace(t){
  (new StackTraceCreator$CollectorChrome_0).fillInStackTrace(t);
}

function getProperties(e){
  return $getProperties((new StackTraceCreator$CollectorChrome_0 , e));
}

function parseInt_0(number){
  return parseInt(number) || -1;
}

function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}

function $$init_6(){
}

function $getProperties(e){
  var result = '';
  try {
    for (var prop in e) {
      if (prop != 'name' && (prop != 'message' && prop != 'toString')) {
        try {
          var propValue = prop != '__gwt$exception'?e[prop]:'<skipped>';
          result += '\n ' + prop + ': ' + propValue;
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function $makeException(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function StackTraceCreator$Collector_0(){
  Object_1.call(this);
  $$init_6();
}

defineSeed(17, 1, {}, StackTraceCreator$Collector_0);
_.collect = function collect(){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name_0 = this.extractName(callee.toString());
    toReturn.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}
;
_.createStackTrace = function createStackTrace_1(e){
  var i, j, stack_0, stackTrace;
  stack_0 = this.inferFrom($getThrown(e));
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, CM$, Q$Object, $length_0(stack_0), 0);
  for (i = 0 , j = stackTrace.length; i < j; i++) {
    stackTrace[i] = new StackTraceElement_0('Unknown', $get_0(stack_0, i), null, -1);
  }
  $setStackTrace(e, stackTrace);
}
;
_.extractName = function extractName(fnToString){
  return extractNameFromToString(fnToString);
}
;
_.fillInStackTrace = function fillInStackTrace_0(t){
  var i, j, stack_0, stackTrace;
  stack_0 = createStackTrace();
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, CM$, Q$Object, $length_0(stack_0), 0);
  for (i = 0 , j = stackTrace.length; i < j; i++) {
    stackTrace[i] = new StackTraceElement_0('Unknown', $get_0(stack_0, i), null, -1);
  }
  $setStackTrace(t, stackTrace);
}
;
_.inferFrom = function inferFrom(e){
  return $cast(createArray());
}
;
function $$init_7(){
}

function $collect(this$static){
  return splice(this$static.inferFrom($makeException()), this$static.toSplice());
}

function $getStack(e){
  return e && e.stack?e.stack.split('\n'):[];
}

function $inferFrom(this$static, e){
  var i, j, jso, stack_0;
  jso = instanceOfJso(e)?dynamicCastJso(e):null;
  stack_0 = $getStack(jso);
  for (i = 0 , j = $length_0(stack_0); i < j; i++) {
    $set(stack_0, i, this$static.extractName($get_0(stack_0, i)));
  }
  return stack_0;
}

function StackTraceCreator$CollectorMoz_0(){
  StackTraceCreator$Collector_0.call(this);
  $$init_7();
}

defineSeed(19, 17, {});
_.collect = function collect_0(){
  return $collect(this);
}
;
_.inferFrom = function inferFrom_0(e){
  return $inferFrom(this, e);
}
;
_.toSplice = function toSplice(){
  return 2;
}
;
function $clinit_StackTraceCreator$CollectorChrome(){
  $clinit_StackTraceCreator$CollectorChrome = nullMethod;
  increaseChromeStackTraceLimit();
}

function $$init_8(){
}

function $inferFrom_0(this$static, e){
  var stack_0;
  stack_0 = $inferFrom(this$static, e);
  if ($length_0(stack_0) == 0) {
    return (new StackTraceCreator$Collector_0).inferFrom(e);
  }
   else {
    $startsWith($get_0(stack_0, 0), 'anonymous@@') && (stack_0 = splice(stack_0, 1));
    return stack_0;
  }
}

function $parseStackTrace(e, stack_0){
  var col, endFileUrl, fileName, i, j, lastColon, line, location_0, stackElements, stackTrace;
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, CM$, Q$Object, $length_0(stack_0), 0);
  for (i = 0 , j = stackTrace.length; i < j; i++) {
    stackElements = $split($get_0(stack_0, i), '@@');
    line = -1;
    col = -1;
    fileName = 'Unknown';
    if (stackElements.length == 2 && jsNotEquals(stackElements[1], null)) {
      location_0 = stackElements[1];
      lastColon = $lastIndexOf(location_0, 58);
      endFileUrl = $lastIndexOf_0(location_0, 58, lastColon - 1);
      fileName = $substring_0(location_0, 0, endFileUrl);
      if (lastColon != -1 && endFileUrl != -1) {
        line = parseInt_0($substring_0(location_0, endFileUrl + 1, lastColon));
        col = parseInt_0($substring(location_0, lastColon + 1));
      }
    }
    stackTrace[i] = new StackTraceElement_0('Unknown', stackElements[0], fileName + '@' + col, $replaceIfNoSourceMap(line < 0?-1:line));
  }
  $setStackTrace(e, stackTrace);
}

function $replaceIfNoSourceMap(line){
  return line;
}

function StackTraceCreator$CollectorChrome_0(){
  $clinit_StackTraceCreator$CollectorChrome();
  StackTraceCreator$CollectorMoz_0.call(this);
  $$init_8();
}

function increaseChromeStackTraceLimit(){
  Error.stackTraceLimit = 128;
}

defineSeed(18, 19, {}, StackTraceCreator$CollectorChrome_0);
_.collect = function collect_1(){
  var res;
  res = $collect(this);
  $length_0(res) == 0 && (res = splice((new StackTraceCreator$Collector_0).collect(), 1));
  return res;
}
;
_.createStackTrace = function createStackTrace_2(e){
  var stack_0;
  stack_0 = $inferFrom_0(this, $getThrown(e));
  $parseStackTrace(e, stack_0);
}
;
_.extractName = function extractName_0(fnToString){
  var closeParen, index_0, location_0, toReturn;
  'anonymous';
  location_0 = '';
  if ($length_1(fnToString) == 0) {
    return 'anonymous';
  }
  toReturn = $trim(fnToString);
  $startsWith(toReturn, 'at ') && (toReturn = $substring(toReturn, 3));
  index_0 = $indexOf_0(toReturn, '[');
  index_0 != -1 && (toReturn = $trim($substring_0(toReturn, 0, index_0)) + $trim($substring(toReturn, $indexOf_1(toReturn, ']', index_0) + 1)));
  index_0 = $indexOf_0(toReturn, '(');
  if (index_0 == -1) {
    index_0 = $indexOf_0(toReturn, '@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim($substring(toReturn, index_0 + 1));
      toReturn = $trim($substring_0(toReturn, 0, index_0));
    }
  }
   else {
    closeParen = $indexOf_1(toReturn, ')', index_0);
    location_0 = $substring_0(toReturn, index_0 + 1, closeParen);
    toReturn = $trim($substring_0(toReturn, 0, index_0));
  }
  index_0 = $indexOf(toReturn, 46);
  index_0 != -1 && (toReturn = $substring(toReturn, index_0 + 1));
  return ($length_1(toReturn) > 0?toReturn:'anonymous') + '@@' + location_0;
}
;
_.fillInStackTrace = function fillInStackTrace_1(t){
  var stack_0;
  stack_0 = createStackTrace();
  $parseStackTrace(t, stack_0);
}
;
_.inferFrom = function inferFrom_1(e){
  return $inferFrom_0(this, e);
}
;
_.toSplice = function toSplice_0(){
  return 3;
}
;
function $$init_9(){
}

function StringBufferImpl_0(){
  Object_1.call(this);
  $$init_9();
}

defineSeed(20, 1, {});
function $$init_10(this$static){
}

function StringBufferImplAppend_0(){
  StringBufferImpl_0.call(this);
  $$init_10(this);
}

defineSeed(21, 20, {}, StringBufferImplAppend_0);
_.append = function append(data_0, x_0){
  this.string += x_0;
}
;
_.createData = function createData(){
  return null;
}
;
_.toString_0 = function toString_2(data_0){
  return this.string;
}
;
_.string = '';
function $$init_11(){
}

function JsLogger_0(){
  Object_1.call(this);
  $$init_11();
}

defineSeed(23, 1, {});
_.log_0 = function log_1(message, e){
}
;
function $$init_12(){
}

function $consoleErrorEnabled(){
  return !!($wnd.console && $wnd.console.error);
}

function $consoleLogEnabled(){
  return !!($wnd.console && $wnd.console.log);
}

function $error(message){
  $wnd.console.error(message);
}

function $log(message){
  $wnd.console.log(message);
}

function $makeSimpleStackTrace(first){
  var element, element$array, element$index, element$max, out, t;
  out = new StringBuilder_0;
  for (t = first; isNotNull(t); t = $getCause(t)) {
    jsEquals(t, first)?$append(out, $toString(t) + '\n'):$append(out, 'Caused by: ' + $toString(t) + '\n');
    for (element$array = $getStackTrace(t) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      $append(out, '  at ' + $getMethodName(element) + '\n');
    }
  }
  return $toString_0(out);
}

function SuperDevModeLogger_0(){
  JsLogger_0.call(this);
  $$init_12();
}

defineSeed(22, 23, {}, SuperDevModeLogger_0);
_.log_0 = function log_2(message, t){
  var out;
  if (!$consoleLogEnabled()) {
    return;
  }
  $log(message);
  if (isNotNull(t)) {
    out = $makeSimpleStackTrace(t);
    $consoleErrorEnabled()?$error(out):$log(out);
  }
}
;
function $$init_13(){
}

function $clearTimeout(timerId){
  clearTimeout0(timerId);
}

function $dispose(d){
  isNotNull(d) && null.nullMethod();
}

function $exportUnloadModule(){
}

function $isUnloadSupported(){
  return false;
}

function $setTimeout(func, time){
  return setTimeout0(func, time, null);
}

function UnloadSupport_0(){
  Object_1.call(this);
  $$init_13();
}

function clearTimeout0(timerId){
  $wnd.clearTimeout(timerId);
}

function setTimeout0(func, time, disposeable){
  var timerId = $wnd.setTimeout(function(){
    func();
    if (disposeable != null) {
      dispose(disposeable);
    }
  }
  , time);
  return timerId;
}

defineSeed(24, 1, {}, UnloadSupport_0);
function $clinit_GWT(){
  $clinit_GWT = nullMethod;
  null;
  isScript_0()?(logger = new SuperDevModeLogger_0):(logger = null);
}

function isScript_0(){
  return true;
}

function log_3(message){
  $clinit_GWT();
  log_4(message, null);
}

function log_4(message, e){
  isNotNull(logger) && logger.log_0(message, e);
}

var logger;
function $getCompatMode(this$static){
  return this$static.compatMode;
}

function get_0(){
  return nativeGet();
}

function nativeGet(){
  return $doc;
}

function $$init_14(this$static){
  this$static , 0;
}

function Array_0(){
  Object_1.call(this);
  $$init_14(this);
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType == 3) {
    for (var i = 0; i < length_0; ++i) {
      array[i] = {l:0, m:0, h:0};
    }
  }
   else if (seedType > 0 && seedType < 3) {
    var value_0 = seedType == 1?0:false;
    for (var i = 0; i < length_0; ++i) {
      array[i] = value_0;
    }
  }
  return array;
}

function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  initValues(arrayClass, castableTypeMap, queryId, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, queryId, array){
  wrapArray(array);
  setClass(array, arrayClass);
  setCastableTypeMap(array, castableTypeMap);
  array , queryId;
  return array;
}

function setClass(o, clazz){
  o.___clazz$ = clazz;
}

defineSeed(28, 1, {}, Array_0);
function $clinit_Array$ExpandoWrapper(){
  $clinit_Array$ExpandoWrapper = nullMethod;
  expandoNames_0 = makeEmptyJsArray();
  expandoValues_0 = makeEmptyJsArray();
  initExpandos(new Array_0, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value_0;
  for (var name_0 in protoType) {
    if (value_0 = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value_0;
      ++i;
    }
  }
}

function makeEmptyJsArray(){
  return [];
}

function wrapArray(array){
  $clinit_Array$ExpandoWrapper();
  wrapArray_0(array, expandoNames_0, expandoValues_0);
}

function wrapArray_0(array, expandoNames, expandoValues){
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(src_0, dstId){
  return src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function canCastUnsafe(src_0, dstId){
  return src_0.castableTypeMap$ && src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (jsNotEquals(src_0, null) && !canCastUnsafe(src_0, dstId)) {
    throw new ClassCastException_0;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (jsNotEquals(src_0, null) && isJavaObject(src_0)) {
    throw new ClassCastException_0;
  }
  return src_0;
}

function getNullMethod(){
  return nullMethod;
}

function instanceOf(src_0, dstId){
  return jsNotEquals(src_0, null) && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return jsNotEquals(src_0, null) && isJavaScriptObject(src_0);
}

function isJavaObject(src_0){
  return isNonStringJavaObject(src_0) || isJavaString(src_0);
}

function isJavaScriptObject(src_0){
  return !isNonStringJavaObject(src_0) && !isJavaString(src_0);
}

function isJavaString(src_0){
  return canCast(src_0, 1);
}

function isNonStringJavaObject(src_0){
  return jsEquals(getTypeMarker(src_0), getNullMethod());
}

function isNotNull(src_0){
  return !!src_0;
}

function isNull(src_0){
  return !src_0;
}

function jsEquals(a, b){
  return a == b;
}

function jsNotEquals(a, b){
  return a != b;
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function narrow_char(x_0){
  return x_0 & 65535;
}

function narrow_int(x_0){
  return ~~x_0;
}

function init(){
  isStatsAvailable() && onModuleStart('com.google.gwt.useragent.client.UserAgentAsserter');
  $onModuleLoad_0(new UserAgentAsserter_0);
  isStatsAvailable() && onModuleStart('com.google.gwt.user.client.DocumentModeAsserter');
  $onModuleLoad(new DocumentModeAsserter_0);
  isStatsAvailable() && onModuleStart('id.co.sigma.lab.gwt.client.SandboxApp');
  $onModuleLoad_1(new SandboxApp_0);
}

function getCachableJavaScriptException(e_0){
  var jse = e_0.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException_0(e_0);
    try {
      e_0.__gwt$exception = jse;
    }
     catch (e) {
    }
  }
  return jse;
}

function makeAssertionError_Object(message){
  return new AssertionError_0(message);
}

function unwrap(e){
  var jse;
  if (instanceOf(e, Q$JavaScriptException)) {
    jse = dynamicCast(e, Q$JavaScriptException);
    if ($isThrownSet(jse)) {
      return $getThrown(jse);
    }
  }
  return e;
}

function wrap(e){
  if (instanceOf(e, Q$Throwable)) {
    return e;
  }
  return jsEquals(e, null)?new JavaScriptException_0(null):getCachableJavaScriptException(e);
}

function isStatsAvailable(){
  return !!$stats;
}

function onModuleStart(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

function getTypeMarker(o){
  return o.typeMarker$;
}

function setCastableTypeMap(o, castableTypeMap){
  o.castableTypeMap$ = castableTypeMap;
}

function $$init_16(){
}

function $onModuleLoad(){
  var allowedModes, currentMode, i, impl, message, severity;
  impl = new DocumentModeAsserter_DocumentModeProperty_0;
  severity = impl.getDocumentModeSeverity();
  if (jsEquals(severity, ($clinit_DocumentModeAsserter$Severity() , IGNORE))) {
    return;
  }
  currentMode = $getCompatMode(get_0());
  allowedModes = impl.getAllowedDocumentModes();
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?(message = "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;'):(message = "Your *.gwt.xml module configuration prohibits the use of the current doucment rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.");
  if (jsEquals(severity, ($clinit_DocumentModeAsserter$Severity() , ERROR))) {
    throw new RuntimeException_1(message);
  }
  log_0(message);
}

function DocumentModeAsserter_0(){
  Object_1.call(this);
  $$init_16();
}

defineSeed(37, 1, {}, DocumentModeAsserter_0);
function $$init_17(){
}

function $name(this$static){
  return this$static.name_0;
}

function Enum_0(name_0, ordinal){
  Object_1.call(this);
  $$init_17();
  this.name_0 = name_0;
  this , ordinal;
}

function createValueOfMap(enumConstants){
  var result, value_0, value$array, value$index, value$max;
  result = createObject();
  for (value$array = enumConstants , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
    value_0 = value$array[value$index];
    put0(result, ':' + $name(value_0), value_0);
  }
  return result;
}

function get0(map_0, name_0){
  return map_0[name_0];
}

function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}

function valueOf(map_0, name_0){
  var result;
  result = get0(map_0, ':' + name_0);
  if (isNotNull(result)) {
    return result;
  }
  if (jsEquals(name_0, null)) {
    throw new NullPointerException_0;
  }
  throw new IllegalArgumentException_0('Enum constant undefined: ' + name_0);
}

defineSeed(39, 1, {});
_.hashCode$ = function hashCode_1(){
  return $hashCode(this);
}
;
_.toString$ = function toString_3(){
  return $name(this);
}
;
function $clinit_DocumentModeAsserter$Severity(){
  $clinit_DocumentModeAsserter$Severity = nullMethod;
  ERROR = new DocumentModeAsserter$Severity_0('ERROR', 0);
  IGNORE = new DocumentModeAsserter$Severity_0('IGNORE', 1);
  WARN = new DocumentModeAsserter$Severity_0('WARN', 2);
  $VALUES = initValues(_3Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit, CM$, Q$Object, [ERROR, IGNORE, WARN]);
}

function $$init_18(){
}

function DocumentModeAsserter$Severity_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
  $$init_18();
}

function valueOf_0(name_0){
  $clinit_DocumentModeAsserter$Severity();
  return valueOf(($clinit_DocumentModeAsserter$Severity$Map() , $MAP), name_0);
}

function values(){
  $clinit_DocumentModeAsserter$Severity();
  return $VALUES;
}

defineSeed(38, 39, {}, DocumentModeAsserter$Severity_0);
var $VALUES, ERROR, IGNORE, WARN;
function $clinit_DocumentModeAsserter$Severity$Map(){
  $clinit_DocumentModeAsserter$Severity$Map = nullMethod;
  $MAP = createValueOfMap(($clinit_DocumentModeAsserter$Severity() , $VALUES));
}

var $MAP;
function $$init_19(){
}

function DocumentModeAsserter_DocumentModeProperty_0(){
  Object_1.call(this);
  $$init_19();
}

defineSeed(41, 1, {}, DocumentModeAsserter_DocumentModeProperty_0);
_.getAllowedDocumentModes = function getAllowedDocumentModes(){
  return initValues(_3Ljava_lang_String_2_classLit, CM$, Q$String, ['CSS1Compat']);
}
;
_.getDocumentModeSeverity = function getDocumentModeSeverity(){
  return $clinit_DocumentModeAsserter$Severity() , WARN;
}
;
function $clinit_Window(){
  $clinit_Window = nullMethod;
  new WindowImpl_0;
}

function alert_0(msg){
  $clinit_Window();
  $wnd.alert(msg);
}

function $$init_20(){
}

function WindowImpl_0(){
  Object_1.call(this);
  $$init_20();
}

defineSeed(43, 1, {}, WindowImpl_0);
function $$init_21(){
}

function $displayMismatchWarning(runtimeValue, compileTimeValue){
  $wnd.alert('ERROR: Possible problem with your *.gwt.xml module file.' + '\nThe compile time user.agent value (' + compileTimeValue + ') does not match the runtime user.agent value (' + runtimeValue + '). Expect more errors.\n');
}

function $onModuleLoad_0(){
  var compileTimeValue, impl, runtimeValue;
  impl = new UserAgentImplSafari_0;
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  $equals(compileTimeValue, runtimeValue) || $displayMismatchWarning(runtimeValue, compileTimeValue);
}

function UserAgentAsserter_0(){
  Object_1.call(this);
  $$init_21();
}

defineSeed(44, 1, {}, UserAgentAsserter_0);
function $$init_22(){
}

function UserAgentImplSafari_0(){
  Object_1.call(this);
  $$init_22();
}

defineSeed(45, 1, {}, UserAgentImplSafari_0);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var makeVersion = function(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }
  ;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 10;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 9;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 8;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
function $$init_23(){
}

function $onModuleLoad_1(){
  alert_0('tes');
}

function SandboxApp_0(){
  Object_1.call(this);
  $$init_23();
}

defineSeed(46, 1, {}, SandboxApp_0);
function $$init_24(){
}

function Error_1(message, cause){
  Throwable_2.call(this, message, cause);
  $$init_24();
}

defineSeed(48, 8, makeCastMap([Q$Throwable]));
function $$init_25(){
}

function AssertionError_0(message){
  Error_1.call(this, valueOf_1(message), instanceOf(message, Q$Throwable)?dynamicCast(message, Q$Throwable):null);
  $$init_25();
}

defineSeed(47, 48, makeCastMap([Q$Throwable]), AssertionError_0);
function $clinit_Character(){
  $clinit_Character = nullMethod;
  Ljava_lang_Character_2_classLit;
  2;
  36;
  0;
  65535;
  55296;
  57343;
  56320;
  57343;
  55296;
  56319;
  65536;
  0;
  1114111;
  16;
}

function getHighSurrogate(codePoint){
  $clinit_Character();
  return narrow_char(55296 + (~~(codePoint - 65536) >> 10 & 1023));
}

function getLowSurrogate(codePoint){
  $clinit_Character();
  return narrow_char(56320 + (codePoint - 65536 & 1023));
}

function $$init_26(){
}

function $desiredAssertionStatus(){
  return true;
}

function $getName(this$static){
  return this$static.typeName;
}

function $isInterface(this$static){
  return (this$static.modifiers & 2) != 0;
}

function $isPrimitive(this$static){
  return (this$static.modifiers & 1) != 0;
}

function Class_0(){
  Object_1.call(this);
  $$init_26();
}

function asString(number){
  return typeof number == 'number'?'S' + (number < 0?-number:number):number;
}

function createForArray(packageName, className, seedId, componentType){
  var clazz;
  clazz = new Class_0;
  setName(clazz, packageName, className, seedId != 0?-seedId:0);
  clazz.modifiers = 4;
  clazz , Ljava_lang_Object_2_classLit;
  clazz , componentType;
  return clazz;
}

function createForClass(packageName, className, seedId, superclass){
  var clazz;
  clazz = new Class_0;
  setName(clazz, packageName, className, seedId);
  clazz , superclass;
  return clazz;
}

function createForEnum(packageName, className, seedId, superclass, enumConstantsFunc, enumValueOfFunc){
  var clazz;
  clazz = new Class_0;
  setName(clazz, packageName, className, seedId);
  clazz.modifiers = isNotNull(enumConstantsFunc)?8:0;
  clazz , (clazz , superclass);
  clazz , enumConstantsFunc;
  clazz , enumValueOfFunc;
  return clazz;
}

function createForPrimitive(packageName, className, seedId){
  var clazz;
  clazz = new Class_0;
  setName(clazz, packageName, className, seedId);
  clazz.modifiers = 1;
  return clazz;
}

function getSeedFunction(clazz){
  var func = ($clinit_SeedUtil() , seedTable)[clazz.seedId];
  clazz = null;
  return func;
}

function isClassMetadataEnabled(){
  return true;
}

function isInstantiable(seedId){
  return typeof seedId == 'number' && seedId > 0;
}

function isInstantiableOrPrimitive(seedId){
  return seedId != null && seedId != 0;
}

function setClassLiteral(seedId, clazz){
  var proto;
  clazz.seedId = seedId;
  if (seedId == 2) {
    proto = String.prototype;
  }
   else {
    if (seedId > 0) {
      var seed = getSeedFunction(clazz);
      if (seed) {
        proto = seed.prototype;
      }
       else {
        seed = ($clinit_SeedUtil() , seedTable)[seedId] = function(){
        }
        ;
        seed.___clazz$ = clazz;
        return;
      }
    }
     else {
      return;
    }
  }
  proto.___clazz$ = clazz;
}

function setName(clazz, packageName, className, seedId){
  if (clazz , isClassMetadataEnabled()) {
    clazz.typeName = packageName + className;
    clazz , className;
  }
   else {
    clazz.typeName = 'Class$' + (isInstantiableOrPrimitive(seedId)?asString(seedId):'' + clazz.hashCode$());
    clazz , clazz.typeName;
  }
  isInstantiable(seedId) && setClassLiteral(seedId, clazz);
}

defineSeed(50, 1, {}, Class_0);
_.toString$ = function toString_4(){
  return ($isInterface(this)?'interface ':$isPrimitive(this)?'':'class ') + $getName(this);
}
;
_.modifiers = 0;
_.seedId = 0;
function $$init_27(){
}

function ClassCastException_0(){
  RuntimeException_0.call(this);
  $$init_27();
}

defineSeed(51, 6, makeCastMap([Q$Throwable]), ClassCastException_0);
function $$init_28(){
}

function IllegalArgumentException_0(message){
  RuntimeException_1.call(this, message);
  $$init_28();
}

defineSeed(52, 6, makeCastMap([Q$Throwable]), IllegalArgumentException_0);
function $clinit_Integer(){
  $clinit_Integer = nullMethod;
  2147483647;
  -2147483648;
  32;
  I_classLit;
}

function toHexString(value_0){
  $clinit_Integer();
  return toPowerOfTwoString(value_0, 4);
}

function toPowerOfTwoString(value_0, shift_0){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = narrow_int(32 / shift_0);
  bitMask = (1 << shift_0) - 1;
  buf = initDim(_3C_classLit, CM$, -1, bufSize, 1);
  digits = ($clinit_Number$__Digits() , digits_0);
  pos = bufSize - 1;
  if (value_0 >= 0) {
    while (value_0 > bitMask) {
      buf[pos--] = digits[value_0 & bitMask];
      value_0 >>= shift_0;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value_0 & bitMask];
      value_0 >>= shift_0;
    }
  }
  buf[pos] = digits[value_0 & bitMask];
  return __valueOf(buf, pos, bufSize);
}

function $$init_29(){
}

function NullPointerException_0(){
  RuntimeException_0.call(this);
  $$init_29();
}

defineSeed(55, 6, makeCastMap([Q$Throwable]), NullPointerException_0);
function $clinit_Number$__Digits(){
  $clinit_Number$__Digits = nullMethod;
  digits_0 = initValues(_3C_classLit, CM$, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $$init_30(){
}

function $getMethodName(this$static){
  return this$static.methodName;
}

function StackTraceElement_0(className, methodName, fileName, lineNumber){
  Object_1.call(this);
  $$init_30();
  this.className = className;
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineSeed(57, 1, {}, StackTraceElement_0);
_.toString$ = function toString_5(){
  return this.className + '.' + this.methodName + '(' + (jsNotEquals(this.fileName, null)?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
function $clinit_String(){
  $clinit_String = nullMethod;
  new String$1_0;
  'ISO-8859-1';
  'ISO-LATIN-1';
  'UTF-8';
}

function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  if (!instanceOf(other, Q$String)) {
    return false;
  }
  return __equals(this$static, other);
}

function $indexOf(this$static, codePoint){
  return $indexOf_0(this$static, fromCodePoint(codePoint));
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $lastIndexOf(this$static, codePoint){
  return $lastIndexOf_1(this$static, fromCodePoint(codePoint));
}

function $lastIndexOf_0(this$static, codePoint, startIndex){
  return $lastIndexOf_2(this$static, fromCodePoint(codePoint), startIndex);
}

function $lastIndexOf_1(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_2(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $length_1(this$static){
  return this$static.length;
}

function $split(this$static, regex){
  return $split_0(this$static, regex, 0);
}

function $split_0(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || (trail == '' || count == maxMatch - 1 && maxMatch > 0)) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    if (lastNonEmpty < out.length) {
      out.splice(lastNonEmpty, out.length - lastNonEmpty);
    }
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $startsWith(this$static, prefix){
  return $indexOf_0(this$static, prefix) == 0;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __createArray(numElements){
  return initDim(_3Ljava_lang_String_2_classLit, CM$, Q$String, numElements, 0);
}

function __equals(me, other){
  return String(me) == other;
}

function __valueOf(x_0, start_0, end){
  $clinit_String();
  x_0 = x_0.slice(start_0, end);
  return String.fromCharCode.apply(null, x_0);
}

function fromCharCode(ch_0){
  return String.fromCharCode(ch_0);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = getHighSurrogate(codePoint);
    loSurrogate = getLowSurrogate(codePoint);
    return fromCharCode(hiSurrogate) + fromCharCode(loSurrogate);
  }
   else {
    return fromCharCode(narrow_char(codePoint));
  }
}

function valueOf_1(x_0){
  $clinit_String();
  return '' + x_0;
}

_ = String.prototype;
_.castableTypeMap$ = makeCastMap([Q$String]);
_.hashCode$ = function hashCode_2(){
  return getHashCode_0(this);
}
;
_.toString$ = _.toString;
function $$init_31(){
}

function String$1_0(){
  Object_1.call(this);
  $$init_31();
}

defineSeed(58, 1, {}, String$1_0);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = nullMethod;
  back_0 = createObject();
  front = createObject();
  256;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = $length_1(str);
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = $charAt(str, i + 3) + 31 * ($charAt(str, i + 2) + 31 * ($charAt(str, i + 1) + 31 * ($charAt(str, i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  if (result == null) {
    result = compute(str);
  }
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = createObject();
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $$init_32(this$static){
  this$static.impl = new StringBufferImplAppend_0;
  this$static.data_0 = this$static.impl.createData();
}

function $append(this$static, x_0){
  this$static.impl.append(this$static.data_0, x_0);
  return this$static;
}

function $toString_0(this$static){
  return this$static.impl.toString_0(this$static.data_0);
}

function StringBuilder_0(){
  Object_1.call(this);
  $$init_32(this);
}

defineSeed(60, 1, {}, StringBuilder_0);
_.toString$ = function toString_6(){
  return $toString_0(this);
}
;
var $entry = registerEntry();
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object', 1, null), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler', 12, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$', 9, Ljava_lang_Object_2_classLit), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable', 8, Ljava_lang_Object_2_classLit), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception', 7, Ljava_lang_Throwable_2_classLit), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException', 6, Ljava_lang_Exception_2_classLit), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement', 57, Ljava_lang_Object_2_classLit), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;', 66, Ljava_lang_StackTraceElement_2_classLit), I_classLit = createForPrimitive('', 'int', ' I'), Lcom_google_gwt_lang_SeedUtil_2_classLit = createForClass('com.google.gwt.lang.', 'SeedUtil', 34, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_DocumentModeAsserter_2_classLit = createForClass('com.google.gwt.user.client.', 'DocumentModeAsserter', 37, Ljava_lang_Object_2_classLit), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum', 39, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit = createForEnum('com.google.gwt.user.client.', 'DocumentModeAsserter$Severity', 38, Ljava_lang_Enum_2_classLit, values, valueOf_0), _3Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit = createForArray('[Lcom.google.gwt.user.client.', 'DocumentModeAsserter$Severity;', 67, Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit), Lcom_google_gwt_useragent_client_UserAgentAsserter_2_classLit = createForClass('com.google.gwt.useragent.client.', 'UserAgentAsserter', 44, Ljava_lang_Object_2_classLit), Lid_co_sigma_lab_gwt_client_SandboxApp_2_classLit = createForClass('id.co.sigma.lab.gwt.client.', 'SandboxApp', 46, Ljava_lang_Object_2_classLit), Ljava_lang_Error_2_classLit = createForClass('java.lang.', 'Error', 48, Ljava_lang_Throwable_2_classLit), Ljava_lang_AssertionError_2_classLit = createForClass('java.lang.', 'AssertionError', 47, Ljava_lang_Error_2_classLit), C_classLit = createForPrimitive('', 'char', ' C'), _3C_classLit = createForArray('', '[C', 68, C_classLit), Ljava_lang_Character_2_classLit = createForClass('java.lang.', 'Character', null, Ljava_lang_Object_2_classLit), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class', 50, Ljava_lang_Object_2_classLit), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String', 2, Ljava_lang_Object_2_classLit), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;', 65, Ljava_lang_String_2_classLit), Ljava_lang_String$1_2_classLit = createForClass('java.lang.', 'String$1', 58, Ljava_lang_Object_2_classLit), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException', 51, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException', 5, Ljava_lang_RuntimeException_2_classLit), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder', 60, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_UnloadSupport_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'UnloadSupport', 24, Ljava_lang_Object_2_classLit), Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client.', 'UserAgentImplSafari', 45, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_DocumentModeAsserter_1DocumentModeProperty_2_classLit = createForClass('com.google.gwt.user.client.', 'DocumentModeAsserter_DocumentModeProperty', 41, Ljava_lang_Object_2_classLit), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException', 55, Ljava_lang_RuntimeException_2_classLit), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException', 52, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl', 20, Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'WindowImpl', 43, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$Collector', 17, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorMoz', 19, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorChrome', 18, Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend', 21, Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl', 14, Lcom_google_gwt_core_client_Scheduler_2_classLit), Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit = createForClass('com.google.gwt.core.shared.impl.', 'JsLogger', 23, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_SuperDevModeLogger_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SuperDevModeLogger', 22, Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
//# sourceMappingURL=http://localhost:8787/sourcemaps/sandbox_app/gwtSourceMap.json 
//# sourceURL=sandbox_app-0.js

