/* Validatenow jQuery Plugin v0.2 */

(function( $ ) {

	var $settings = 
	    {
            req: "req",
            errorClass: "error",
            onError: function() {},
            onSubmit: null,
            fieldEmptyStr: "El dato suministrado no es correcto, por favor verifique e intente nuevamente",
            fieldInvalidStr: "El dato suministrado no es correcto, por favor verifique e intente nuevamente"
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
					    $("input, textarea", this).each(function(){
						    var $this = $(this), $val, $arrP, $pointP, $val = $this.val();
                            
						    if($this.hasClass($settings.req) && $val === ""){
							    $haserror = true;
							    $this.addClass($settings.errorClass);
						    }

						    if($this.hasClass("email")){
							    if($val !== "") {
								    $arrP = $val.indexOf("@");
								    if($arrP > 1){
								    
									    $pointP = $val.lastIndexOf(".");
									    
									    if($pointP === -1){
										    $haserror = true;
										    $this.addClass($settings.errorClass);
									    }
								    } else {
									    $haserror = true;
									    $this.addClass($settings.errorClass);
								    }
							    }

							    $val = null;

						    } else if($this.hasClass("num")){
							    $val = $this.val();
						    	if($val !== "" && $val.search(/[^0-9]/i) != -1){
						    		$haserror = true;
								    $this.addClass($settings.errorClass);
						    	}
						    	$val = null;
						    }

					    });
					    
					    if ($haserror) {
						    if(typeof($settings.onError) === 'function')
							    $settings.onError.apply(this);
					    } else {
					    	console.log($settings.onSubmit);
						    if(typeof($settings.onSubmit) === 'function'){
							    
							    $value = $settings.onSubmit.apply(this);

	    						

							    if($value === true){
							        return true;
							    }

							    return false;
						    }
					    }

					    return !$haserror;
				    });
			    }
			    return $(this);
		    },
		    clean: function(){
			    if(typeof(this.submit) == "function"){
				    $("input, textarea", this).removeClass($settings.errorClass);
				    $(".error.msg").hide();
			    }
			    return $(this);
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