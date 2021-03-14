const clarkKentModulePattern = (function() {
  const name = 'Clark Kent';
  const secretIdentity = 'Superman';

  function introduce() {
    return `Hi, my name is ${this.name}`
  }

  function issueReport() {
    return `${secretIdentity} saves the day!!`
  }

  return {
    name,
    introduce,
    issueReport,
  }
})()


/*
* In Module pattern we define functions in returning object.

In Revealing Module pattern, we define functions in closure area and only use variable names in returning object.
* */
