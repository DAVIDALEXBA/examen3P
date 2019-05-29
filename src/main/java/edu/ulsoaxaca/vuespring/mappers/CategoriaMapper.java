package edu.ulsoaxaca.vuespring.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


import edu.ulsoaxaca.vuespring.model.Categoria;

@Mapper
public interface CategoriaMapper {
	
	@Select("SELECT id,nombre FROM categoria")
	public List<Categoria> findAll();
	
	@Insert("INSERT INTO categoria(nombre) values(#{nombre})")
	public void insert(@Param("nombre") String nombre);
	
	@Delete("DELETE FROM productos WHERE id=#{id}")
	public void delete(@Param("id") String id);
}
