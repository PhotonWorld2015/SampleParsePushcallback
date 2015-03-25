package org.apache.cordova.core;

public class Notifications {
	int id;
	String message;
	String flag;
	String navigate;
	String btnsts;

	public Notifications(int id, String message, String flag) {
		super();
		this.id = id;
		this.message = message;
		this.flag = flag;
	}

	public Notifications(int id, String flag) {
		super();
		this.id = id;
		this.flag = flag;
	}

	public Notifications() {
		super();
	}

	public Notifications(String message) {
		this.message = message;
	}

	public Notifications(String message, String navigate) {
		this.message = message;
		this.navigate = navigate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getNavigate() {
		return navigate;
	}

	public void setNavigate(String navigate) {
		this.navigate = navigate;
	}

	public String getBtnsts() {
		return btnsts;
	}

	public void setBtnsts(String btnsts) {
		this.btnsts = btnsts;
	}

}
