@import 'ui.js'

var onRun = function(context) {
  
  var selection = context.selection

	var userDefaults = NSUserDefaults.alloc().initWithSuiteName("com.wescraig.sketch.artboardsequence")

	// log(selection.firstObject())

  if(selection.length == 0){
      noArtboardsSelected()
  }else{

  	var prefix, mainName, sequenceStart, sequenceTotalBool, suffix


      if(showWindow() == 1000){
	      // prefix = userDefaults.objectForKey("prefix")
	      mainName = userDefaults.objectForKey("newName")
	      sequenceStart = userDefaults.objectForKey("sequenceStart")
	      sequenceTotalBool = userDefaults.objectForKey("sequenceTotalBool")
	      needSequenceBool = userDefaults.objectForKey("needSequenceBool")
	      // suffix = userDefaults.objectForKey("suffix")
	      seqEnd = userDefaults.objectForKey("seqEnd")

	      renameArtboards(mainName, sequenceStart, sequenceTotalBool, selection, selection.length, selection.count(), seqEnd, needSequenceBool)

      }else{

          // prefix = userDefaults.objectForKey("prefix")
	      mainName = userDefaults.objectForKey("newName")
	      sequenceStart = userDefaults.objectForKey("sequenceStart")
	      sequenceTotalBool = userDefaults.objectForKey("sequenceTotalBool")
	      needSequenceBool = userDefaults.objectForKey("needSequenceBool")
	      // suffix = userDefaults.objectForKey("suffix")
	      seqEnd = userDefaults.objectForKey("seqEnd")

	      renameArtboards(mainName, sequenceStart, sequenceTotalBool, selection, selection.length, selection.count(), seqEnd, needSequenceBool)
      	  clearMemory()
      }
      	
  }

};