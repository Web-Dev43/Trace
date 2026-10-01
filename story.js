window.TRACE_STORY_PROJECT={
  version:2,
  name:"TRACE Story",
  generatedBy:"TRACE DevKit",
  events:[
    {id:"identity",trigger:"manual",minutes:0,app:"System",requires:"",phase:0,notification:"Identity confirmed.",clue:"The session has a named user.",flag:"identitySet",flagValue:"true"},
    {id:"unease_01",trigger:"time",minutes:1,app:"Files",requires:"identity",phase:1,notification:"File activity detected.",clue:"A file appeared without being created.",flag:"uneaseSeen",flagValue:"true"},
    {id:"maya_reference",trigger:"time",minutes:2,app:"Browser",requires:"unease_01",phase:1,notification:"A local record mentions Maya Reyes.",clue:"The name Maya Reyes is linked to TRACE-143207.",flag:"mayaReference",flagValue:"true"},
    {id:"record_mismatch",trigger:"time",minutes:3,app:"Files",requires:"maya_reference",phase:1,notification:"Session record mismatch detected.",clue:"Two sibling records do not agree.",flag:"recordMismatch",flagValue:"true"},
    {id:"run_archive",trigger:"time",minutes:4,app:"TRACE: RUN",requires:"record_mismatch",phase:1,notification:"TRACE: RUN accessed archived session data.",clue:"The game is reading data it should not have.",flag:"runArchive",flagValue:"true"},
    {id:"maya_contact",trigger:"time",minutes:6,app:"System",requires:"run_archive",phase:2,notification:"Incoming local session.",clue:"A second consciousness signature is active.",flag:"mayaUnlocked",flagValue:"true"}
  ]
};
