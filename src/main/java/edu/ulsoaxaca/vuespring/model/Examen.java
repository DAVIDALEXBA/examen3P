package edu.ulsoaxaca.vuespring.model;

public class Examen {

	private Integer id;
	private String id_materia;
	private String preguntas;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getId_materia() {
		return id_materia;
	}
	public void setId_materia(String id_materia) {
		this.id_materia = id_materia;
	}
	public String getPreguntas() {
		return preguntas;
	}
	public void setPreguntas(String preguntas) {
		this.preguntas = preguntas;
	}
	
}
