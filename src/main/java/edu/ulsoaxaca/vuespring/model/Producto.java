package edu.ulsoaxaca.vuespring.model;

public class Producto {

	private Integer id;
	private String nombre;
	private String categoria_id;
	private String cantidad;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCategoria_id() {
		return categoria_id;
	}
	public void setCategoria_id(String categoria_id) {
		this.categoria_id = categoria_id;
	}
	public String getCantidad() {
		return cantidad;
	}
	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}
	
	
}
