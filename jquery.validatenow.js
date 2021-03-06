/* Validatenow jQuery Plugin v0.3 */

(function( $ ) {

	var $settings = 
	    {
            req: "req",
            errorClass: "error",
            invalidClass: "invalid",
            shortClass: "short",
            longClass: "long",
            repeatedClass: "repeated",
            errorMsg: ".error.msg",
            confirm: false,
            confirmMsg: "",
            onError: null,
            onSubmit: null,
            fieldEmptyStr: "El dato suministrado no es correcto, por favor verifique e intente nuevamente",
            fieldInvalidStr: "El dato suministrado no es correcto, por favor verifique e intente nuevamente",
            selectInvalidVal: "-1"
		},
	    $methods = 
	    {
	        init: function(_options) {
	            var $this = $(this);

		        $settings = $.extend($settings, _options);
		        
	            if(typeof($this.submit) == "function"){
				    $this.submit(function(){
					    var $haserror = false, $this = $(this);
					    $this.validatenow('clean');
					    $("input, textarea, select", this).each(function(){
						    var $this = $(this), $val, $arrP, $pointP, $val = $this.val();
                            
						    if($this.hasClass($settings.req) && $val === ""){
							    $haserror = true;
							    $this.addClass($settings.errorClass);
						    }

						    if($this.is("select")){
						    	if($val==$settings.selectInvalidVal) {
						    		$this.addClass($settings.errorClass);
						    		$haserror = true;
						    	}
						    }

						    if($this.hasClass("email")){
							    if($val !== "") {
								    $arrP = $val.indexOf("@");
								    if($arrP > 1){
								    
									    $pointP = $val.lastIndexOf(".");
									    
									    if($pointP === -1){
										    $haserror = true;
										    $this.addClass($settings.invalidClass);
										    $this.addClass($settings.errorClass);
									    }
								    } else {
									    $haserror = true;
										$this.addClass($settings.invalidClass);
									    $this.addClass($settings.errorClass);
								    }
							    }

							    $val = null;

						    } else if($this.hasClass("num")){
							    $val = $this.val();
						    	if($val !== "" && $val.search(/[^0-9]/i) != -1){
						    		$haserror = true;
								    $this.addClass($settings.errorClass);
									$this.addClass($settings.invalidClass);
						    	}
						    	$val = null;
						    }
						    if($this.attr("data-minlen") != "" && !isNaN(parseInt($this.attr("data-minlen")))){
						    	$val = $this.val();
						    	if($val != "" && $val.length < parseInt($this.attr("data-minlen"))){
						    		$haserror = true;
								    $this.addClass($settings.errorClass);
									$this.addClass($settings.shortClass);
						    	}
						    }
						    if($this.attr("data-min") != "" && !isNaN(parseInt($this.attr("data-min")))){
						    	$val = $this.val();
						    	if($val != "" && $val < parseInt($this.attr("data-min"))){
						    		$haserror = true;
								    $this.addClass($settings.errorClass);
									$this.addClass($settings.longClass);
						    	}
						    }
						    if($this.attr("data-maxlen") != "" && !isNaN(parseInt($this.attr("data-maxlen")))){
						    	$val = $this.val();
						    	if($val != "" && $val.length > parseInt($this.attr("data-maxlen"))){
						    		$haserror = true;
								    $this.addClass($settings.errorClass);
									$this.addClass($settings.longClass);
						    	}
						    }
						    if($this.attr("data-max") != "" && !isNaN(parseInt($this.attr("data-max")))){
						    	$val = $this.val();
						    	if($val != "" && $val > parseInt($this.attr("data-max"))){
						    		$haserror = true;
								    $this.addClass($settings.errorClass);
									$this.addClass($settings.longClass);
						    	}
						    }  
						    if($this.attr("data-error") == "true"){
					    		$haserror = true;
							    $this.addClass($settings.errorClass);
								$this.addClass($settings.repeatedClass);
						    }

					    });
					    
					    if ($haserror) {
						    if(typeof($settings.onError) === 'function'){
							    $settings.onError.apply(this);
							}else{
								$($settings.errorMsg).show();
							}
							return false;
					    } else {
						    if(typeof($settings.onSubmit) === 'function'){
							  
							    $value = $settings.onSubmit.apply(this);

							    if($value === true){
							        return true;
							    }

							    return false;
						    }
						    if($settings.confirm)
						    	return confirm($settings.confirmMsg);
						    else true;
					    }
				    });
			    }
			    return $(this);
		    },
		    clean: function(){
			    if(typeof(this.submit) == "function"){
				    $("input, textarea, select", this).removeClass($settings.errorClass);
				    $($settings.errorMsg).hide();
			    }
			    return $(this);
		    },
		    reset: function(){
		    	if(typeof(this.submit) == "function"){
		    		$("select", this).val($settings.selectInvalidVal)
		    		$("input[type=text], input[type=email], textarea", this).val("");
		    		$methods.clean.apply(this);
		    	}
		    }
 		}
    
	$.fn.validatenow = function (_argument) {
	    if(typeof(_argument) == "string" && typeof($methods[_argument] === "function")){
	        return $methods[_argument].apply(this);
	    } else if (typeof(_argument) == "object" || _argument == null){
	        return $methods.init.apply(this, arguments);
	    } else {
            $.error( 'Method ' +  _argument + ' does not exist on jQuery.validatenow' );
	    }
	    return $(this);
	}
})( jQuery );