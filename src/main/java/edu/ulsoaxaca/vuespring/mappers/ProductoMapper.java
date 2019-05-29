package edu.ulsoaxaca.vuespring.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import edu.ulsoaxaca.vuespring.model.Categoria;
import edu.ulsoaxaca.vuespring.model.Producto;


@Mapper
public interface ProductoMapper {

	@Insert("INSERT INTO productos(nombre, categoria_id, cantidad) values(#{nombre}, #{categoria_id}, #{cantidad})")
	public void insert(@Param("nombre") String nombre, @Param("categoria_id") String categoria_id, @Param("cantidad") String cantidad);
	
	@Select("SELECT id FROM categoria WHERE nombre=#{categoria}")
	public List<Categoria> findId(@Param("categoria") String categoria);
	
	@Select("SELECT * FROM productos")
	public List<Producto> findAll();
	
	
	
	@Select("SELECT  categoria.nombre FROM productos INNER JOIN categoria ON productos.categoria_id=categoria.id order by productos.id")
	public List<Categoria> findAllProducts();
}
