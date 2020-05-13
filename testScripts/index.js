module.exports = [
    require('./100-simpleSelect'),
    require('./200-createSchema'),
    ...require('./300-createTableTypes'),
    require('./400-createSimpleTVPProcedure'),
    require('./500-callSimpleTVPProcedure'),
    require('./700-createProcedureSimpleWithDateTimeTVP'),
    require('./700-createProcedureSimpleWithDecimalTVP'),
    ...require('./750-createOtherProcedures'),
    // ...require('./800-callProcedureSimpleWithDateTime2'),
    ...require('./900-callProcedureSimpleWithDecimalTVP'),
    ...require('./950-callOtherProcedures')
]